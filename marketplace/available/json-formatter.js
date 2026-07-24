// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPfhNOQx2ouZIRrzRb6XGmZnaNeVFIz4Z6+qSXpAMUEe08QiMB0y3tobKN7Gplgh6kYjOzCNPxCfe/UpJD8cQ0YqIqlbNrJC0TYEcVhJXCNhOZ9mIzSpnEmPGXVzxjOXYw18whcakJzMdjbD4q9w0Mx89yDnaDvW7h3V9+R5z8cWrSimuwzNhLzEbPx2IlfLNBcXke4dgFfssTXwO7SwuNFbGoiAoJBD6DRPrn+iCQ+/eQByFzFLgGrU5hrOXsV6TvgihdO4Cvl0Fwr0BZy5YITO/LAt2BYjpf221k2W384dvyQJq++d9/giXFs5D0o498axBNpMGG3MOfkbIgi+7yT0OoLf0ECfDBfrnTvx2UU/FF+CxW5D5/4043HeYVtJgHDYVecahCgSKuMT4KYprWoWviqfKIxJMF/4M/Ur7OYfLxbzOE73YEQUmFeeTjvBBhNeJn50HsipuEb57etrP6U3/ZqV46uzZH+bHcY0SbHlSN7P8Jft9gTeLLrE1G8vOeyPDoyv1oEAO+vmy4TzFhtd3v2onhMag6aUk2aiH5pCR71JM8dEhEM7MBoxoxNPNeMCSan286nrx87OKODi7YMdJm5pG9Wk0N59emHtXgr3fZTOhIRgdIOG/FoIqLu1nM0guSZRSmwz1IzelOPSxUx41pPwZbPDz9utmuX8yaK0BOQZF1GybePZ2/wKErgD7iUz+QOh9b41yIeWktflgC19fcXC616eUQh7MgUN9+G0bvM/jyV/k9PY7xFFpMMmYZNoaRCWziwByUl+3ArmHTJ1py9fhJhlZS0AKnblXpm8l4QdT3mIKmEJ5Ld3s+khmTrb2Wk3SNf69VNyjOqVZ0zQ+/ubnTb55Z8f3xUaoWEGOFgtdpywSHI8w/FDr5HDeUCBElN8vp5A7eLJHkC/imlRo5dDQDSVtMkNmjr4NN1c5fg8PzePwJYhm8B6S0zgFbNXprVDsuGocVyeTuX2EqdCfG/vpkPjnTH7lMq3xF063xcrNKt1hHKm41nA3jHy+D4PgWf1x+EyqTBvtkEwENMU/Zk89GyAHAsBCYbl1CHEdst9TpY+uHudaYtGLhEzHLO5EM/QHo9Arwapvxhdc7IP14vZCb7SX06NOqf08IN+xjYeFHZ6U/gnrZeDOZwxHAksca8a6DpOQmpUJYT2+Kb/PvD5d+jG0z9telN85te6G2YawuWAdyBE0eAN2pEgY2Mdd9g6bLoGxqfw0/mMHfiGKO6/YbI0OZM4KKM2h3baGnL6ssUwJdrGfKrncXJKwFgZoEPzebzVF+2FefCkkAnijmlNPPdEhHK6w9rdQf2E+2qA==';const _IH='bc481ed159d423b98837531417e18b11e57437330feefdb4daf0f50f4be8eec9';let _src;

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
