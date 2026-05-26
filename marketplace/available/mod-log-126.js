// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fM6eOzKerip7kgIbZ8EawrERY+HxtdTiRy3u34NlCkCM9K5IzpBrbOXPurPC9hiyQPTX+WGAyD5ajW/Krya9ncg6pOJaA5qjbeVNKgpgmFUEJklV0aI6m1EJX5WKSDyXALmItekaYG7FskVFFjcpmr8LcMBOFVNSKFILohLUWcQL+bM1E6cZ2hIRBUeX9TAcGUrD4T0XvNpsWeSAb36LUlh1fWY2fCx6qSCeJEYfoDg7R9Mc+xE6xq1O/Ssu19KK0vDHBR0eYscxXo+DRkz6B7InsFbalmKnBZOJR1i68nO8P0d07+fbFAvOAyqjuVpzrSpu5I0eju/1HKe13MxAZh3daqw6iwlNoTWBQ5SMaDbTbrlJaCxR+lypldipIBeE3SbRVbPjR8gBeiqr17oZ9V8yRhE+BXM0S05oaaHThu0FsmJG56AKoTNM/6YvwDC4aKHosFBoSQVv750iIKl38AJfVMq7Z+NXeBlxuYhN3Q11Q7A0bQDoqnlnDlJjKWdA3BvXyrFoOe7JClMCz1wN9p/N+DwUW+N/u/KhGlXUWyspr08u3LN18YOYl7tMP1ZhdHXDdfcyOpaz4FnqKThuAlZBdrkE36pMdOjOxy0OIUOsLgZN5iJeXZFjDMiv77rEp2N3UmdvbYfLoYqufLyYPgvWWwA05yHaFHQOv7/+Y1SPYH9CXXmw/E6L4d55m5l5iVeMOPBGB8GusvPQs/0t4lQ6iA6ZGeImXZ++D1CyFwohgWLozV1RmMxF6S5E+zm+Xw4qj/Adql3dqqzOG5Yo7ZS+tQRt6e2Z6iawivbnjchQP5q67Zu3AmCsQqYwvGQ3BgyYzuun8wpyp29cjZK9P4Z/2z3EO7M5lICjv1KFb8V9P7aBYhyxlzaHqH360zTy1JXiiQnrdYLmbjvQTXxx9XFnG+A6JtPfQ0EH79FVqvwijYwL3m+RpwNjPqK4dffKGXscqSMAEWPUrc6EAMO0CbETHisJm7dC0KKz8cLcu5lha7gUnAIIw4uFkgdZb8/mxjhH5MzdyT2DQ+X56RyQiogLAnOfT8jb97ARhT0KuG2CtO3BbgLg4sE3Yc99B+AJvAxu1Mpv5PRh1j+uuoLPM7JvMmDIsrx4i8HtriOcGXz/OifOpjXJt7hwsz7hcHuLucC3H+JK02P4PP7LntN9d0BZmZ5ydzuyNUAYZiEucAEEM16pcjm4bdLqIujhOmCO5DC77mhRE93gvheSQ5KMFTjBnM7J1p0RRgqkFbOFvCp5CX04JnNgKQUYx6ZKrFA/UDSECGLLmn85PANfsh5o6Bpx1JBSxu9qd/OZho8CZyetrcCKJZZyuHuCmRfJW8DRmWgynfTsiIu8xg==';const _IH='82728ed21b1fa5d849fc6bf6fca4a87f52a19ecf579796359aad62cb7005483c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
