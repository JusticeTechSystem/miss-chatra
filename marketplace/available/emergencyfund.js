// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWXs0irrygSaxhvsXCtnXoC1DZKESt8CRKkaIX33hWd9rVuhFdQ/3y80nD+sZ2c6Ud6snYw5cy99TgrSE3k6l2IDxS5gxzkzxof/2lqcNG6trVnPDNFQBwA3sRKnX7PWKyRLCFf5tztVCRIXJT8nzdeU2fPdbHOCjNs6h/UvG22EgiJP+hyzCN23x869tqzAV86jiUYYdTAEXd87aEQXQEqzAidy8a2/LpN/dLTjrbG+Roa+w1TSFlvGnEE5Cpn+IJC2F3sJh9iowrYDdXAoEyS32YWv5OtwGs7DTAwckNLH41Nb6/4rwp6qANW75bj6/blOnMxO3Q4Wxle8TBApW4bE1/CGShe6J7Ab97rsDbLZIIDAPv75Q6ICtukP+lTw1mmDa6H24bKhxUVjF10AyVcKreiBbuUOlT9v0Z3xRwGaq7lZHrnb5RRzMnnuoIWBAbrEf1jF4fGZmgdVvLCgULXEsWelKAsMPNe4sAS3Y8fPKTQFoiTDBBrjwqv+qSXdW+FGZea2f9QbZgwVXxxnr4SX6nQtzbt8FjuMW3P2nFBWVsg+TlfmOdYSd9n1HINiwAr7cSOZoU2Cy1sDTJMVm1oYTHPVDlCdxS0jqaAkjWsN8x/QTbo1nW1NGorMYi+GQ4c7Esm6wWPYZTHlrh3CyNmH2w89lnbmvYuyVbyZ0LniiNdOFxUpH67J+vMQFW1uXbYN0XMCPOCbFPynUWzPtQATAWCqblhq2EWYkN77GSPriMEhMk/asCwP/FV6eMWmQXwCfWgPvrYsTOX2OTxdTijc4emIipt9EzyxnPxaxB/A0oAmfvEtlnY64udGHp7890eRPo21ZYJ00fG3k1kZReBYl8aDKDs1Ox+Mkc81Q/is/TtF1kBG8XgY+QKD0Aw8PNb4ZXqsZtVwTwRobRSIHqF4LgUTjfGE7RgCOrPer12Ci/gRI7HTXA8DNRECNmT//uiuixPYg+i75SDX9gUbWWfIQHvoMDllIzLyMIgAMd+c4n8fK/BG6Po+e7qxiR+hiis7esErHQPjUoK31Ez6lyNC8N3n3FkM3HvVp69CyajbmZQeUGtFEW6SigJGPw2gfRaymHpu2dSpfERawAh5FimgFqiYIJOkMBEPs1NAm0nM8x8QOef+sBb/uV6HmJzMDuWAtfZwCwCeCylQBqrcCZua6fRq6xyW9mSgAareT73kN+LACncPP3BhhDPbFraKrgWmTQ==';const _IH='86b66b2e1ac01dd83bc438302a1b37b7acb5ae6a856d83533fdd7f1a99ecb7ea';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
