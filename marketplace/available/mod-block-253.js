// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCKhS6appeg6ajuIJYODnqFPxkg/acxz7H1aCROHPKMGl8Rem3XrcLk10FAVPxWIjmfuEXcwsJl+ScFU0PRKJQL2JCq9oFHpUYs9RdPUXpNb5PW1S97CfZeyIThRRCP7a9MuYHXhmbeD45Gf2dTWvaxcgjg2Efk8JW/Z8oE7lVK9sF5wBLjDOpJ/YACJ3Qn43haqUad9ULOGibPH/r03QZrZBlTszi/K8vf4qFo5zgL0TvIKNVodu1U6t4vk020asvPdpqNpEpzLUA1b5x5VjuOYDTJaqJk6oqfCQj9ptKlyAnnr29DM5cL/YkB/quKN/tnrsI4KZW/39jo8H2viya4S1yNiLCYRn0c3IK3stL0ceaUj+QGJ6Tueu1YfuR39OtHfHTXAhOuled/fxWYGOKqzj46+OJ7yoKWvMcEV9WOlkTpYtUXMUX7qYJhQO1d02pJAYKjYIUBzUuH1or0zgEokpQwLW3bOgqdTILB75B19TORAYVkE5SymEVIYO27ZSYX7sFx2glssTbYfH2+yGziDWQAjzLx5E03Dt4jQBbG/immdizmrPVbmE1cchTr3et5cRvkrhdTvjkhNYEGQJnQBXr3X25RqW/rbdSOAQbu38/VvQJNhBL4JqVlCajq/78dls4B/kZbF9fIfp13Q2ChYBJuOZH10hLqTrfLLNLpop1KoLd5WebreuLxnorqYbauv39IuyaGYeCDZtXgnusPuZp2lBEhBQGy9xCCO6HF2Vq7a5sGDClZVQrhN0XocrumzdnwN/9McWfTV8kR7j8q8JEAdtn1fmw/bk9YH7ssTjKP6/0o3H4GdOl5TXyP+9cufllBDyMQQw93Nzelk4nIa56SAfNB78bptUvrvqLR7bK1lcIX9KVXLRQe/GkcSHQZrjSR/QSqLBaxYKyfIO/eQNYW6XETwQ7Fj5mud8aiNHuOBBQr1GvMnyx7dz8q86T68vDFoNevdF/U6awVL4s7LFM7hevyjaJLTSRmkT3CXH6XAe2ahfqrhwA7kwsiRRjS+ce2cVLcDjhw9Nbta4GTv99F7J8b/48IylbBKttmGq9Z4r1lB67ciB6wEeWzSm0nmfHnTQSn3Si+IFPG9eY257jdpUySeUiuiFNAn/IafGmMfTstcVMCki74JuBb3gAiCDPlv3wgufk82KZpdZIOb05ab2lDZb/a+8KOYHJn4JbNEJac7niY+ZUNfzQ5f5bUNu0RRe+d1h82hLsBRu/iMqoVIenccyhZFTCdmRa4TqIi1gTC+ijROt1oAX+atRZVib5fxU19oufu/XuIadbTVgbPjNC09BtCq1pB+zZmZqDAsZSlj+3pHMncZONrzTeGZD7mQnCaZvIkqKgFxS7+smh+YBoSO49/Esewzw=';const _IH='3927c4b4e6aa2564d692a0cd18b40465a26a55aa1172c1289f84f02996404103';let _src;

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
