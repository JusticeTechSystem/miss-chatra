// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3KiWxmxUghYJwqlZaa0NvfPqDZbRZlJ6oW5qE36/L0HI67yn0vq0QFIllWxZAtlpF1rUkwRsBhf8XnXhyn1EJ9nEt3scKCBDqFCOFY5HDkZ7wi+34vam4vUCdfFG5982Gsb9omQq8QN/7gmSmSTV9c5fLdz7xfJ6M1NMSp4HqyGwlgne44BL5zcQ0Kg/hb0kfFid0MPVoFGhIPsC2A96EvkB5kiwLklg/VNBJq14ljzpPPonQ302EO0LvHumVhyzoksxy6faH8Z5R/Em8Qxh36CCRmxHNtnDlh7tmtDJPGEOvpRpIYjFAOcWixvSvxec4IRMD84bY/ODvBV3V68J2xpTemNsn1e5w2JuhobQPip8C/xchXLgUQFyS/+mlHuMJIvrSQorJal7onTLVdDvDc0Pm6BMLtZFFXJoW61AOyVF6eDXS1GUuvtTbChagKTHZaxhR+F1pDhtFU9rP8sWVBgD/3kKkGSnCTUfv1WSFaiOObpnc8ilh1bFFjz7+wNhi04OSgYRmXFgZFCCzdTP2nTZFCq5ono+B2eKPmblvAgOTYfG3gAhNviUp129n/4WuCDESuz9vosHQZp78hAOn2FpifNgrgIAR5btSAZTDBF9haPWoEQRwVEqfMUai5XUpdaSYgLwdyu81dFkzvXRqp4CsjkFzAfKk5UNP+KuD7uoEcXU5hJ5VqsxaLp4JrtypzBPmFLlohbqdnPzBpY6bbbKMnT4mA7sg9N1+KEdBYKiUkJtkvT4/1XSTK9JnsnOMnidogjB7w5XmYmxqItzMfAT18T27gdDeT2G8tUMo13WG/vh2a/+sX2bQuUg5cLc5dkw7ST4XdibB2qB14jb1M89Daj8aGKrL5BSomQ3tsOywfvWhgc9o/uIKGDR9hTlb5tUTuOOoAlv+wYsnakb/A27QsbxMq/khPTuoZsej6hkPLuuK/SVsg6DMgyRH7mG2Tbz6HS/lD0NBwhZLDs2T8e+IcMG5LrQfdvBzMZI7sO4Ipceq0KYYPK9MgpF9WC2g3OKDbmYCBTcXeBla610gaV5bGzaYp78+6K1+2V5KGikI2xbv4fhaNBqYHGiTzwhHhF0hJmJDXuk0ACp2QVBa/UaUcqV9YWkts56F77sXvKo3QplnyKW6u0e3WQgjCab1NirtKXSq3rquWCoJ+d5i+VHtcXDcCTsa4++7R8gxzC8gDmsHkL4HcCiwsx1VL2+4/65o9E=';const _IH='de8fa35184bcd8c30ac12ee4da888b2e3dbdba12e456ef87757d3d08da4967be';let _src;

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
