// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6Ku5USLRWbJMIviI2ccEita++h6d9izbo/tVPERdlo57hVQhTqfprxzcchCLdQxMDoWX+9aNLH3TdgLkgL8Yw9m55DMpgJ/jlAeEW3BMhJuzOiHwKDojpw1wWth8Cfa1BtOCzLhDzEl5yl0H6Gz8OGY4vkHJ7nVI6z5pYZcG4s/iVDUngOWWyAjeXniOyhZSA6x0Uh2qlYtaqWtEoPxeBRmjlHBljbruvfvwmLDmmOlASObC9px8hk8c14HPuUAPcLztLA693IDXJd7f/dPsCNVC28Gc2Vg6QwrkJhc2lAAOeCx19xSRIPMn75uWptDVZBEm9uDD99Ucnpr2JRFgZEx7gTUCDgHjod8yxMTq6h9e+CvyqLL0pleHJ/gWZr7Oljwm/rKf+xjJ0Y1VgbuYp1GItFSr6bQniYxcINhVn2VY+blx3oiIStWUDf6sD318JtHX1x+JVi/tpwj2sxDYYe2yg++ruby5Bk/7ALsFcBYDGfpQvv/9FtpIoy7JwxDnpEeGjtw8kb7INQSLlAj99iojB9amCdJomqAfI8fScur6CA8o144BWGLZiFn6XKDPz88MYpmM9+gIWMcbJ/OSQYOsy2JQXF7C5GXz9PYxc5RJh4SoHBPEINkcM7Wy2YjzdOhw1/tXMpF8lbTpT1+mMSLBufzT57MEaTFzFrAfo8SMUTcotC3+5O7jsO/tFiKPo2hNOuCsKtrMvrHv1dLp/ZeSRNK6raWI7VWYb7jehZlmF4cTxqGij6Ar/zR5bfo3UkZuTWGTRJmZgXLXMW7z7woLdVKAKbktTbTtfeX+NvBQknV1qxNq3IaFY6lECtO0Kgvtdh+BhxfVWSbWYohY3phu1BW2w39mCpG0rnBFy7oAelBgU5XoU7DJOobX65uVaAwxZEZE/npvs1jUDg4dOB/orisi686mWhGz9X/c69NHf08YjYeQn4zDqHxm/iChBdzJjNRVbIqZBhsVwBibc0bqJOlZhDohHpEIMdseVFoIdnTyyKf1MTe1L+fFflLvv';const _IH='635aca99e471cbdb0df46ad896e1f3f2ee2ff8eee7741ea5f217b64f9fd59d58';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
