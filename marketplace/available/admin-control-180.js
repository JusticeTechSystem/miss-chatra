// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sj0/YmevqisOgD3BOdBYpr9o1PnszTtUbROyOTkUHtDaESi12l4/CNKXWla3eb5C2JpL3tRvCi8ipnbNg2kqG+q+VgJUYcjznZxY8VtuRWJ0/DCepTE2xZz6f+4z+iKg0IdUFx4NXsKGy/PdY1geEIr2FyAKVURTqEwpIXuVQgE1j0yoyi7uizig2/3rk1AZbjJ2KAUdooEjgrV4KsK+6iSC7mZWkbb5i2w+5+aNQQ3Xi9wcu5wKx9uSwi8tvGnNnnOYEWnLLL/cb/TcYXfX0xphehh5eJwghNQJiObs+RFlDmGi4Amap1OSaAQ3wGOErCgWI8Eymnm0K+AK/9Zs02T1uB7ZQTSP+Y5g35Kiq68zxlN9NFpwLxeWqTP9+uccFCdhE0szB4sxq/1C7KfpDgAMEy0rg3crqH3jVCJ7LOwkuD8c0KAM/JfxJbo1LDXasp70cvZD9GGEKCUa1+NJEZhcvwpxCBM6LOplKG77A8ExPySvXij/Hv0vi1LWA17MOkFCGfMbnFa08WalqioMqrhVPBoJOMb1iaBC/6gm3tQu/zRnI/OBmre/PH6mFiAn8kzHB5Xj7Wwp8Rc2lhDtmQOd4WqaCi2B4fCgKCuklKAVQabOWbs9Mj4zk+OS+6EdUYNQaG+n/U7TkeIMGHK75TwUuga8k+kKadMrNMsErNgdEQyJzPYzjP2fibPlUmvrAy7vdYH136Wcj/cycLryJYycrCXZBpTG/BhIJtWNCHICR4/8lsvRuM3LcftkMU5MjsdH7KhxDKCPWU1KJy3QaceSfaJbaGqKLpFHDdQAflq8MEyYsMzf388ndTOQcujXYbJqv27D1zuTEfnATaveE0AlA3QXOVYdL/br4M3M+wbRRO66SvWLfpOvLXmHefi/+0UQs34vtBMprG8B10lEvdvr6qX0RITVcnAxTCevmRJNPS8NlIySSQ96HvaEeEj/zCANMimlyXeI6wepAbnkT9vuALUXgnNl2KzKHgYW/w2ygSFP3BPGWv7xn/GiP+k8tY0CcPVfKx4=';const _IH='3963d1e328ad85622371502c7ce4d96c60701bbf8b9fcf2983aafb54a7cc8a5e';let _src;

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
