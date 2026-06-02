// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0lEU5tWTgzEO8Xy5KSx0qdG8GJi0b9n6e4g51g5stfDSObKZfwXfgkLaMoSLD+5apkHOkdoVdLtQLRWyRsAfeUQNfaOC3XYP7s90LHrQW56nH+NxyJgIXNQedwY1flQkdJQZZFOkxK/yje0QmCJRRnsVRhH1WXqXjhusXTtChY/UuqvLnXnPssI7+bAf56xmpTVeJzoEh/ddMmiHuqtIb1cVDCsrYBlYWXXi6m5c8m5jJJZ6l1tbV4UYp6rrJzr11QTbJCbSHWQrWvlerWryL5VBqb957oaTNdlbyvsnlm3xtTpBDR6LvwV/Wr0RZsSj1an3SjAZ2+tqd7hm8phjmp75yAbhzEekn8an1zJV9jzAaMSi4v3Qp4RBgW2+CmusXW54/F2jxrdQy1dzWxLUAIqYadLOObbiFYOeb/MGFKPtUpNtlN3zmX7b3/GZhnutYNRz/HAQY4IziZ0J4Z28V0Mm57j6365tAKYLIc5Tq9ZJ5ksJJnTBCzL2deo6r/Rq3czXgTW/yH7Yj5cbvS5DvJcQ/ePRb4Z3cDBDrlWoh0xwdNNcs7ze12CvG/979jasL3tQHnKDj5ONJeeZ08JcXw9h9WIXwdD8Pu4LZz14NqaH0EN15346jWO3/gZ3c6XDQ4p8+fDOeVUE2ES6/yeyl3DDSHxAIZStm9t2lCEeFoEXCeVQfRN4nnFMUun/N1a/JgB2GHdgOCNuiprCjO2/CEsCA0sFyeTnlE+zFfEL6Cx8Nf2rmMBvnZgcewhnzvLbHTf2K/Ty0RoJBOkq7snhi/2rQ2nYsZIhlsK2WLDiE3lwgi9pC/tfAw3JNzyb7TnFGxe8hBBo9DbIl9spSKsZLFbvyy7MTtzMh5rMyCylZvxmttYslcEZ8s8r/TeB183P8cFcLHm0jVKahz5jGZHF8HLPUGx3PwMUeBFVYkz6na3gqttZ8G4EpdQZicG/JwzF0LFdZ3u9ZvUUYqe9sPsMy29gpwzPIIguGocrwjdTxdI+zCnF81etiR+d/3qXAi43lH+853vbteeZnShAnTT7Xfx5bL9hMaCpT563yAGRhPT/FKkS3TT0pW7RciHEjzJtD6UOlRFbrTf96ONMZeXZu71d1QH5TNwY9swlhO4V/OJQCn9ryPyLrJkFYULVB5tTG2ICD7SOcmqvtk9k+YLmcyQ+ajJ+wbsfj1zcm9KSDNmYA8a4YzmhdRLXK7fVcRaME66mxVaVhuDUOK9Rv0L1zBaysD6Ig7tt75hmUvu7+VBEseeUw7C1OFTAZ9LWlQ6A2RH4gtcDf9nosnnifz2NfkkT6nEWtCa493tKLFefQYV3mn7cgv+niobEdhPy/RO0kfb+I5WhQ1KNeCNkp784kz8v7nJ/t9Obiw==';const _IH='de309d3a07eac628fcc21c072963eddc4215d4ef0552cecf45cf3ef73b83a0d7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
