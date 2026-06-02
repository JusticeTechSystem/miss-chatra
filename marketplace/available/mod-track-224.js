// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mAOkrajAkBxjUoy8cfYpqa7JivOgn3R4AoidbL6NR56Gr0ex9fG2wwW/lNw/rUi3AcDlmhUlpm2pDuolbic05kXbTcc+7ZcoS0OqH6M6qOU8uI5hFO2xBmnC9iCdBgGQCxjPeDEhMh4w7uOuk89TMQ39eUswNvERpaR44B2z/YlkCldwk3ZrnIcgpzWLj/Ht/3ERGQ5yJhGaXP060AACkY0alWvaK9nPaDzSlA9l8U9CYNARtXwpH3Z51usrYRg9W7RnkYJJmlRTYtgerkiYjjkofsPMwR8Jlc7w6/5luEqO896Sz++S/V3PGpbW+rWKpoFN36yg8izQ4DvSz90sqNd2ltg+BMWE/ytW1eFFbGDv2F3walRh7/GVXsoEyTa2+fPXWg1xYUlxXTMyEthHnPTToiaDkwuoeQAztZcrm465OMIq7FBIkrwH1U7/nIXqc5afjgMRbdWRJrVP7Qu+PmHH1wejveD0gUkIjhycFjzQbeyGXBfNLosbaKu4nsLKTJ63dSRONTSt52VUl0e/r+JEyNQRqzKshYRjG9Xt1jjqD/DgxPy3tnXKpcJq9ietsnlM0zboKmQsl6YKDwytQNQq+a27PQSRX9U+WXooITg08TU7OBxxbsfnSF/YVrzABUELEBuJ4Iyrm+0Dw+5S+VQ++sh554v02EXHzmGlxGypfkrJqd1nIeyRxK5krxNl47fIFu0D1iFQDOjZ8jZU+mAYKMOjj4YnE/crSKW5dfYW6aU5U8piiDAIvrtxaiqlL0Y5WNre6N4pW/HtPei80iubHqux4nWoSRVYWUQdwpr/ifT4LHcjtkQsLmGYJbyK0e8FFX2z0vwSAXlz3cMLpmeknqxHxbB7/n0GEwVtKebyfxYpQFkKYVcfcRYr+hAgxEE7v9mS3PWiAXNBAvaxoZNntJgPv9Bb4FZ3iHgAD8KrcEFEMboado5Z172Zm4h+UsMYQ7SQc+D7HVVlRu3MQvmKv+P2NGEp8dRO6NIX8nlvRLwGcba41P1NDEPBJrtsZNtJQTXq6IFM/OrzEigRqo2qba1w6CyeV8AdSGw42bHlhwT0Vg6J8w801KtDH8MPXVMSxJeWav1DiprlNG7fRHSVCaNWzjpHHksEV3pKjzPEfY+Vh9Cbih74NfYf0IDjnIIaZriY4cd1IB+YaWnlX9H8rMu57vqmLPKja13gxmecJv8HbZVpu422FyfCPfLCBV8OzBib5OEK66Y/+CPlBvIULuBFxRCRM6tCwr7l6QCjMZjwEhbVzVyPnJMfWHa45v1xyDqOmH20AVhPV5FR4QJuof/V3QU2gq0sFivSv3c/Atz2DkbRtgpU7OvDngv99NouTYVNAJ9RZxWqmyq3YQIoL00ij65ac0UI5PXj';const _IH='3b80d59b9a0dc31fb647acafee680f175dc11501146eb13004ae774e44574a07';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
