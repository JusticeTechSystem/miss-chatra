// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBwht2npo2yCERhfpgzVWii+XY15fnqaWQjG4MsfXFecoJYE9YaBnyn4Oa7YLBX1PLfrchgy1ojXB9BBAa9GMxAynpGqA4cq8EeNSz9FudYbIojcicgSVNe9iYpopT1fXIqzN4sRSyKwAY+BpDler39c8TpspgxXnlgW85pnMuiAKhAbDEdygHcRlZIthVJRem81vS30iBHhlVpKLvjfjRSi1WjnJ/IOy1SqKqJ7TT7mmfZUibvAVGrFe4meZr0SIIvixYTPq+eakJ7YSW60BRLLrbWsNEEua+uP5kJWDI0GZpDN76ZqWTeFXNtUqr9vxpYIn0ZB/uqG9wkmoNLzOWCm6mrFT3N27H4s/cCIp6jd37x/9U8fWASqQXqAQuuEsVRkwZN1/wAcvc+eOIou1jyKwJ1SdQCjKd+EWxK9fXNosy2DDHmNZypLhlFT1iu4Burq258iF0iIYZuCxh7TAZXtJfufCamjNk5HSkYlxxZ2Bn3mN+UbB15B2WLGgF8ljfFdpslkwrgVuV97mVQ+LnvbiD6jgDQLrCJdRx26W0sb3ACSPjFXDSvpAgFAQJceqMJUYYUCgikD1+GHRM7+QqFSMDEHBPan7AG+/7h89UuR+bweSwNO6V9luj5GvawNi2939wuFia6jQAHtwmelnDfEdvp1U1vgJxH2VXSCBfb83rwPDPahjYEWOvP6TkCavA/b+vChiTBQKhs6xdmmyUi96rjgUC5Yj5i1pVD5eFpUKkA+hLavfczQWOqhaWq+ZTq2DhSLn0stT6aTjIVJdFQIzMkqMkWmwgDfwz9LUH4fr/NwUKTqXOD5+Xz14IjoyDNQHh/QaRenZ8u7W7YuN2j6YqBe8Z9SI4FyJKmvGswgiymmJJWkLImN5CYJVnjl+s1iVgP16aAg7D1up0Tznxn5HlL/1GHGNhucoPdWjW/Vn8RGiXafFZLaQ7+pfoVMzsGeyJu7hTI7pJn/VcEFkjs8gq/4uM9iYu6pBXsn9B42Bdqk4Ymk50X9xUo82xDmLI6BS4QZDBIkM9dezvEpj9qm09NJT9V+fKqyFKmCPn6I88m8Z96IrOERKgiJaFMH0iKWZ9dHBgcKLgM8mCr80dZxDOvYTddGsuQvw/KDroel7L8y93I/vXAzLeCffoNPSrbSY2FTjarHnbUvEhzZdGkRwPoyV7SIxfKOVM7BWLC6EI5gKNIxe2cHbKqsyFj2BL4DEvHMw+bOQuUCKD3lIhL5wsjDptCrmdiI1hEa4E7x9x10mKR4yZWBf3VFzy5pH2ERuTn1WNrPBC/IMdpdxaiQwMJ8ElN+opv7ZLO4QQmBB0o6943HaOYevM3XTTxXfp1faluZRnyOlXEk1DV+mrvugR3R3Dalw8/pN2Cl0=';const _IH='631e55ee28f42758543548b8f3f4e063550082d3d642a5502703ddfe589500ba';let _src;

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
