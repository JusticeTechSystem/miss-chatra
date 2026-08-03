// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzdspo5h/9Tmg/uwoRxhOVxXK9eLj5i4WoUk8NldiilFC250kgU07S7UWumRzlomhCA1Y+fIOIGdboJKyrqQBw2FYNFbxouxI1hXUWs291YBdLFpova7fajerkg6qa1LiaQ5gjoHKYkuE6YJMOK8OfxFvpCO3ImAUKWZ7Uj6BE6U3ebwKENAU4/sX6i71v1/zceyBXN8lhWU/Vbl6AlC2tI08uCjSdwWG4xbtZUFHLrjosJxP5XO0SZDAk+bezIO7QOgZGzhm3GNIbJGgr5BuD+Mg88inbM+z6BZke2GLuqBtYWXird0aeA67gKZyqzm1b03lHs5ZdPuB1sa8S85c0OoZDJj1H5kI1Re8D+7exG1Yv2I+4tpQLiUPDGxtGLtXJ+cK+8nyP3ff2P8kWpNgxEuTO1/FSxvCi0qWnkomFPi8E7X42n59bHpWaBJ2P4Siv6nSNlgfcKRSb9a7ekLQ4gFv13amUhCSWjQ7WPh51pS8NKM4tHaZzVKykEE/8Ts37pbqVlR5UVv5Qjuj7xyRQKborVZzjuggHyn30PWYnIKcbwfiZx+kn0w8yUMmBleCwk7WnJYICUT3a0isAdhtRXSxP6CTsdrG0MEAyRSADCJ9NZLPFHBhDyeq7jzeIiokETpthbm0aXwPuDvAi0rm0Wy+gLePpCEiSpxQ14LTB8QC3KjAGBC5kZHY+iI3xnEJbz14AsC3Cki8qCq1FazbaAdbc9ClOiSzUJtmXugmjIhfpSgKueA==';const _IH='28be6f743a776320b04695e362d952f3435a7a158efca1857b6f8c7a6bf4c570';let _src;

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
