// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wEoxlvCL+BZgtp1r39KJI++jCU52ZjwTK/dgyVsuDBtKQyzEH8ow4Kh9IO+vaGJTTq8LOCfRhnMqQFpFlXOkCPhhl0Qw8VFzJaQNxnd9icZaETyt/K/2lCc3ZJqjPricLaDRz5yQgiVg78RITto1d8Rj3r3zhs2ukFDrOH5OgSJKtkxyBAxMJ2C0olyfKB0Q2PrPobr5r9izsgrVRy2/HkU6YLlSMBWddMenDztFYxdZeFNPYQptkCpSxqxxnnmMCqVIeL49v6AblHAr0Hc6+j7tWYh9c3+7oaZVHBLZE/ETir8s0aQ1TvSplSfvC4utvoMZZ9N6YmuRAB1TEIdL795HwKqV9TBtb7XSVpxd4rTfW3iqFkRUa5R1KBCiHBEEUXqluIcCwap2LeA8pljThXYg79akBjDT0/uua3v/WKOyDdlkA2U0u1yjBm1vW5VjvihM1rOH0y66hhRtA4NmX/T/jFzdhWzxuUxyz+pKSHQ4moTU1KtjR+TUyDyRZal6gL6WD+to/w3Be4bmQjwsPwjHs6Uz2E28i8XNFJR8wWYxoKWcwNkLkfgIBOQgdeMFZ600uH01H3gIbGQldHCViNOq0IWJFlcoM+elv4irmYEWJ5PD9YPvZ9O8pwjBroWCC0ckTNSkWt9/VJwPZKhDSabhRAv6+gW5hccreMvlqIPBfCMZ83JPQmsQdRfkhGxFnuaDMC+6YvwiwuzOM7bKMfDs2RuGNjUe+3iSEkg53fJI4VPl4zd3+y/xhs40gylkdLW6YEE3SsRPW5T3X1OjwxADKU4mcRGZYGm5t5QfoXJ+soL5NC0cB2CKhUFhHBSVCr6m+s7Sl2V6cTsaxPLBxGCYLXKd31CB4LXYe30DoR4xgSSfA2sieRaIsUt2ftoY0Hx7xq2JVUQRKtwcIWnDFMlm3E0DLbRz30bOF3HSXpbuUnNJdG7bPilHNVK2iCFpyT/7l73UCqdo4pbyJFipsUA0VLV8HF3Z3YCmlu2dkyEFHdtRKr6hVQsbpKfa+l5okjzbPuv4jhDjkBpbEZ7tloFWSfVQbISB63hI5Ld5wVvqSdzD0owvSsy+DfzED6fFKyTa7x4m6Tp+SMuqxa0cAgWMaUbxdZrZcX74f9gymW6V9dTyJnHA2l+vHi6JqEk6NCnOQnEvff/hlg1VCljFE4C2b84WMJigsncdcZgNYSp98vGkS61mW2XqSiSV/9CvsOldg7r4vn1TlZpFF8oERU8GgCUBflHiEQAVz/5xNdb0Hynf6f9nLnDR2hstivhLqI0PJSFho+1qEX3P3uGUNRObErkTSD+b5rY/FTPzkSDzQwhHeYgEiE7NLKF9Zn+C/Unu6o1uxIa8wA==';const _IH='4d75d62da12fe90f0eb0c258671ecec016313246dced22e4e4c94a830e577416';let _src;

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
