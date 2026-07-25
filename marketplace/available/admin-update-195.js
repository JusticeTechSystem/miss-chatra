// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIlICIzcqpa0Ff48y6pCtqTnltEXo9lpBL78Q7aGhyZu8QaG8ZuoHKpSte4u7/Y1aVh+kANW+GXetrRqY8+MuW7wpWkcRjMyZ+24IxgQvMH4btFHZgh3w2R5+oC9uIr8b0EnXnVmrk+r/juex4Bv35gM4MCe3WSqgIEwkwn+roejf9kpSb+BpvPIxxqpdCi1hV/pe2ZfjJFOBHAZ4//hgahKCRc7JDxxzhLQikVE/7tqdVcPyUJ5QzweHuqkWrX1yjOLIZbXxm+/xnBD0hHOvlBCyQFcFKSy/XOVMsmVCbURc9ywMUm8qb84hPdLiCO5WEFXnBGJkffN0ASVF4q1XnI0WxfiI3B8MSQWL3ZhBEYX8lZO85XjcEKkCQQpsLAWDRB4lF3d0hmyIEMFVjzIxXf0f9htNQaKzDhToOgVyBuzX1WAyrpVfrG8RYt4b5uO1K2oKKLpwr69ZqKy/eMlNnejXRC4c+oPCtucL2wtGBs9wlGx0C+TXFEiV1fSNiOe7qmG3VXzxYabL13YdNN/x0Ug5AM3p0pPwCwb8OV25MMFySOLIRfMy2hbnl0yXiZT6s6LV6Zki0AxZIb+ig+gdHAMyJzArgnC631KM2ZEq5pNfA3C2z1EPfIE5Qq5gxc62aIqwROtOib6tjUvrwpe+JajFEt4CDZKF3DwvpfFsffeBKYe7z2Jk7AB1W44Gxm95jRcK9p23neSmF9LxtncDjCztVlW5KIYrsR/rdi0J48NugCfw4WORpFVu+qcpiGfipIpjRusGTYV4/lRdp+URAwNs1fcRJAGA07ye8eTl36wnSqsOKr+A3+W8eRBkeAcXgWt5cCx72qF+BgltnCZ+Q+UtX/sQ0dQrqM9ksXQBOB6oFOV9i2+XWGbku4uSA+OUnOIm935kjX5ZZUspC14cZWHS/cnQHjUNZDdlO6HAclr+F3Dnw0hhetjWn/C8WF1uKi7UVLr2L/VB+XV5k4dXfq0ftByUghOGgxCwXO+zZotlmZYcMN6cVK4OTsFmmRDxI';const _IH='ada9a6c6e092b7d88ae4c37c9015d3025a9cd5d623c5b3c8ebdc241ec3e22632';let _src;

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
