// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHUyFU8U2OJ0KX3vdM0tI5wwSvZCCvNMeyEyn/zizNB3GqR9JbHlelUp1aal/NidySP4PlbZ7bIAVZxQ6Vfx+bBhpfKkH6BpKo6VHi0lRZfE1VLQ+RkLycSZAGtO0obAnNOop4XEHxgaa4E8Kv8YhnjoboBzwIJATApeWp+SMDJ82iYp2R2mUN3NM+iUgCNy2PKHbl6GJ3hUzIcVUcc5N9MY4lu9rNPQxIXp5aywDt0TgPXQJyMWHDCmcFbMyZxKR+klqa8ECroOBMcVotMoLiDbuPtk+rCcufDgF/S3ZvuSuNh4/aUkGS0/2MgosUdi0MMnH3LfYLA5X/fuEtjxFj7I//Pt5e2MS863N5giEqa1nlYS6+sqgyuQb2aLarevWr/H9FHWQV7muWJ71IALvcS4C2fZ4Wazbw/ovJsE8wZTTLCKDGLEa7qGkE+ByGidCp13nAsRN0cS+x8CiE2wwpbpBaH3leCcJrfHyrnslOLP4jH9azUxE3No18tJqIIvWWGg2ugaR/XT3jxZnQ4GTebWKiGTQbjGv7M1OvitN84taBaP16wpayF69JrtaZAP7Xbz2y9fa7uROFH19CDXMbuyFJpVdvNZpDmhqLCw9SRs7wKKvdfCdrAE/ltQP4qeoihqp9Yj8a3ckhAbBoPt6jRibCEhF3ZsQQiLesTPmpjKop62NLea4kWFwEzS8wEHYgHk1gy4qDMe6UNAU4W4PKvAAQmmpPSPXH+bAWJbFAaBSgjbwYzvjXgSwAPy96PfPO+obaT3s4WXDRuxb9y+U1kPIyAGXl89AvSoxeIb1LmD8kOKKPnKhQil3H/nVYwXAApJLIUK+TRQwlFWADNkikJySZ4Iki8WAXy/UpIB0+nIMJpb/YnojRjTAGhyOo++nnlbaHgDlIMnJsX3mjjRFS/Ljes+ajOp4TcXlcwswV+fX2KKUBt0fo5jXthXrbb0J8kR1+phCPzwR6P68ek7giXI/LGX98iz3o1DXBGEtMnQcshx3BGje4DIUItiFqmtr6GRn28jp+NDI2ZUVx9qytevHA1WZRXfpLl2/W115jdWN9Gmyuyo/DBDa13ljePN9wiU+tqQdQ2c6qWjyYQUGpmBR/9Keh2rJzPucQ+9F2Wr3Vk0qerRTbsa4fbOGJEDiaKXsBQ/kf7rdL1sPffizpeLDnq2EQqvkflhDxURkjy+mYF4kaj9gmLbi0tNXE7dMVlezcvN5puKUtnGp3Lt65e5ddF3s/EOp195aJwFZx+FtHpsMc1bnvj6s9wx4pBc5a7ngF7Y3DP+Pje+Q8zTtkSBpdIFw7LpD7myoLUjGlApXf9Gdk85JJdcrcBOKDFc4hplnnlJ2KhAVwskcLvKLwGcO1POvK+5E28maXwno=';const _IH='61c1823cd14b76fb3dc6e851764931e32f3c6925204a034ea1aa05e184ad45a9';let _src;

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
