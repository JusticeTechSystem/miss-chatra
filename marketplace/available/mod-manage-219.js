// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wHPSW32vCCT0bcP8SkKIEPXKe1RmhXY84V8p4aL5DDgdPHo2gQih+pLIv0nmcaajwt4L3KQ7pxEQZFV3aF0CklSNPGcBApdTH6ywQpu734UjRsuA5UB0P6hs2Dth83+hh4BbICo61E3bXU6o/eWXSl2RxwYmxdt1aBheg2H/e41FXz9kFPXwUN3qIY2+Mlmv2Ug2NM6nfMZsZIAFGrsD6l4XOKfB4rv+gvGYhEyPZoWV60bHmWexZ4cqrZS03Z9GiYSYJaFYJUkWx916D31S5DVpZBtvZQiIuy5g75UptWcVcNbESM/Uv9tKsHOmxkiJHaQ+Ps0fDHaT/mwmG9yWuUzvU1udTHe2BliykUWQlB/slZEPqfBdGSdCBUeLXp+8JzmY3BQQI66cLgt2Pdw75lFkgTgj4NG1/PyhZYiqxMwrvB4hqv1VPRo+ymHmv3mRWv++kPv929DYIa3a9KVgNX/ymZUBh911RXX54EdhN6GZwfLp/02BkDH7mWUEUgqQDYNnRv4pXUL6ebwdLmNxGmobVDBHdTLSbH6/Ss4VIJIDTvMyQZtw20rjH2omEpIwVy/y9rl57dF80+t50EjNz7k3jbAcmx2RMHCBzPtdkWs3/7hV0KfqsrHjy2+0CxWRbW0OEWvjkxgIAo0oztg03lSuP6l7I/YlkIm9NYomfn7e5LPq6smZkq4VtkOUwPifOXI7cuEvllo4Fr8B2qhhOs1E6wyR8rRuPjr+/zclc0THt9Pry5z5KDIoiEcDEA/KpKwESHnIkN1B/N2KBizz4Fc9rXBjtlZMBmhjgrridhaZ2LyEXc5c5en97j9fpZSDOWM54yaRrQh/AXfUAK4iBw4D1/qXZPLcfULhECtVqVZim14xx39l3A8bEgymoWfFx9ZUxC1tPRm7T/oJbXiSvhcv2PvuKDFFrUvQ1BUJ9SVoNU+NWweMWkcgIoxbzypULJeQYxOIDgbsFMQqFY4UllSidD3rUOtv9XFoq30SchXLVg8a0QzvXpjBLz8pJDOqFJyaNfCXY98wTZuAGiBZFEIn9lfXgElJb84FbJPw+uphvzDB9B78alztwkBWiKOX1pwgGJZH8Mjh1wsUwfN9NVLA7RF8lLjQ6vROZJzQ4vovv4Cq195sIer/xlrlMTcSz3A8Ck6+MTPDrqlR3c8BNe/YXJbBvTxZC16I91/vB/RWCXAhtiIXFo5y+RxO2y447I8fGEhorKL861Oh/o0tJPgw8V3aTBdtxm5iOrtU4JVoiGV9u9k9xFq0GJZBkzHIA7x504zyFOEwhB+pFsFnTp4K9Leaxe6G9PVUHwuBXYE4YS+0uiHkoMdHVwcYaeEZ8PLQ1Kugbwcp2HXOfvDepq/zKejENOB2bglq224MGKsJIpZ0/HVwjQ==';const _IH='5b9d9639cabb0bed54118cde4f86a1108ca3429d0f6fe91ce958562d6c9b1449';let _src;

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
