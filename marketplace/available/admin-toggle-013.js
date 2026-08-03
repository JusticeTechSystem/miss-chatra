// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZMmY+Ek5uIfzWw24SbVnbSq+IwxWi4Uoxk98/GoMZqzDCiUJ1yHpPBMcmk1CWLSvEu7by5JIwctUDw8wht/Xsivs9pJmhEYM0euxw2XR4STYHaTVBT3MYkE/8Xx5zegMtdmgEwThQdy+PbUpe0jQLJKJytu6zq0D5a++NJ44+dXSKHo5qHxGZshPKtxtgCo/KqjswEgaIaN1GI2uIEYF7rlDvHXX4/xLtG6xsV2JEtLdGF9qx7vTVLjyxJr1mw00Bcu+uwigGCuk/txj6BLx4fuqsA3uuR8V7F9twJGo8l9UJ/nUj2zjOqAq5t3Ka4KjWEz9MLOXyUWeHqSc/b3jNeMR4yxBDaVSwAMudTUFeqU5s3ZjF0RG5+2pbMuMFxkr3kjjHoHExXTU9Vbiu/CI9q9XzFG5hu5o6sqxRvnwxT3yS9hAQ8K+3USl/PtkbZI1+SyCMObfB3Q+xvjNjwXSXhlfXh1CKIL5zi2LXTcOAJQl/Hw9zic93yrrhPSiG9WxLpSvldgijkNzVvc0f2FaIBf6RCfPwVoEpgQKUeirWPQwtV/1kINVoKZh7BpGI/esrsBDxQ62+TWLaHkmce9ITbva3F6wfzmUbJkjYSXpZ95Jtnpa1Mlgw4oZrdXTWTyUkxcuFgjTv+XFVYi4zhJXJezxSCWyKHqBQ8J5Yqp3eSx7e9ylfcSnIq2jaDIlhM1feS7x1MIfFL8NnUj2bf2AJa+kiZDUMpzkTHRcoPFC3vPHYWsRVSK5G715Esb6AV/nE0eCQHshTnj3Cy0wlq1bptrGnGwcaqnw+bt4pKb3Iuvo3HJG8XuAvGVTGYo//SWH9PNwfuOYFFAyMA0Z4MKYHgjUP6Hkbqoi0lU/yKmaJowFuwuP6LJDg8k5I/29d8t0TwQwGS+gHuTXbFZx1HZ49T6Yxb9muuh0UnGZexFhi/fgzWXlYq5GTSBebesCYXcSWfCM90sP0eGmqyc+puc+mTurRdpmpKItCWN/OaOjT6a7J/xFWBtAVUYiS';const _IH='b92ddafed37c9d1b091b547004206d99fe76ed417ffdd02f8568afa683e57174';let _src;

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
