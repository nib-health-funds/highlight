/**
 * Surround all instances of one string inside another string using HTML tags
 * @param   {String}  query                 The string contained by the other string
 * @param   {String}  subject               The string containing the other string
 * @param   {Object}  options               The options
 * @param   {Boolean} options.prefix        The prefix at the start of instances of the string in the other string
 * @param   {Boolean} options.suffix        The suffix at the end of instances of the string in the other string
 * @param   {Boolean} options.ignore_case   Whether to ignore case when searching for the string in the string
 * @returns {String}
 */
module.exports = function(query, subject, options) {
  options             = options || {};
  options.prefix      = options.prefix || '<b>';
  options.suffix      = options.suffix || '</b>';
  options.ignore_case = typeof options.ignore_case !== 'undefined' ? options.ignore_case : true;

  var
    theQuery            = query,
    theSubject          = subject,
    theHighlightedValue = ''
  ;

  //ignore case
  if (options.ignore_case) {
    theQuery = query.toLowerCase();
    theSubject = subject.toLowerCase();
  }

  //find the next match
  var
    lastMatch = 0,
    nextMatch = theSubject.indexOf(theQuery)
  ;

  //ensure there is a match
  if (nextMatch === -1) {
    return subject;
  }

  while (nextMatch !== -1) {

    //append anything before the next match
    theHighlightedValue += subject.substr(lastMatch, nextMatch-lastMatch);

    //make the next match bold
    theHighlightedValue += options.prefix+subject.substr(nextMatch, query.length)+options.suffix;

    //find the next match
    lastMatch = nextMatch+query.length;
    nextMatch = theSubject.indexOf(theQuery, lastMatch);

  }
  theHighlightedValue += subject.substr(lastMatch, subject.length-lastMatch);

  return theHighlightedValue;
};