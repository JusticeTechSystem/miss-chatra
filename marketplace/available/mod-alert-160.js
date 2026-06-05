// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3CD/lJpy1sfo/pgGmVp9xhvAH7UgaMaNWKGwPb5FZeQaUUQzE/AIKcBnrU8QPWSvGpTSKR2WXV6GeEiFgWO+Sw2qLPkZnG2hRZGg6QG14HjqwK4kk7vtChrzJ98KTVo+N9iUmoCL9Ika5s6AsDu62FyYFvEJ4MR5wE5G/b/HIeDym8qqM+1JpFt83ABaDrz2VOo7zWMJhnhVbDwuEhAOdbk64tS3+s7C4/LMtn2XhTE8XiaZQXhUHKKc/eBXQEZfqRMa1vchsZr3dZZ0EFIRKGntNhdjUR1AZIIv+9HGGO1S+j8rNTqCknLJM3qIsGgITG7w6vmK0hedCLif3hYQem73xMLuxba5xamxrIR4OswIEI0vSJkXAJFpZ9poOc+jDJHIQzJ/gxSGv5AL+P5Wp66p7+e5Vb2pO4+Xtg80f5SO6H1Kq0i5Rax9WSIZ5QcvUZBiKWn4/ysmjGYhco4DckrksKt2xzrHzLRsoWL8Fovrxeh5NOaxOn3UwbLYxVl5bYUOBNe8qe302lFTtC+/zuvnoB8gSsdNIE/4BtC76JfigZM7xzdk/XB8f4pWX+EtduPLNHxt0iZcXoL0s3bqZW2LRV00Ck5/KEVv4FJakgG2oPpzqwqZa212hut+5JfcnMa9lb0OZiIyF4gJN7o2qRR8BqRVaNpaVD7OA4trPWiIng7D26MR7WLVZedT2Z7n/ELE7DHrhHrxoOcnj9/HUl7RMFX3RysJLypX4RVrLXLLbNxwKoXAEO9s1odlmDvJeF7BF3ShQEqwjOuZTyb5oysER1J5GOfw/cLDd+q9hQ5sZE0GAFklro2RDy4rngBTQETclYBMnBPhRTwIk7u3Edvgy66jnMQyWQ49jpMv+YxVDreAdq3kHw9fSPRdxhzoX11O99tG3iYtW4IWCbSEw93jLiCKC/ZdfXUMGCbXH10FwE2rVZnW3O/rsNuFPLtftvmmyMj2jvUdolGjoAqX0pV5RWZcN8CK++Z/fVeD4sJaGU6Cd5ru9DZ7gPDj6Va39/KzSY3OdzfiXzxyxZFP2BlMbyiGWiNdU0kgx6aBosNa2wDDH5575PNW2lqH10E+HeJCz11sDvBeiDL0YppvXLGkoRiEEVOCvkV2Nh3DIfslMAk/b6D2oZyZJbNTKxcYRGaZCISoV7K4ptJ6clqZlsUYXB1ZEiJf3AqicolW8m5j2bIiMz0kP3N4OqNgePusyQl2MaIp1dE8gfqPZCuuRmBvthiSmptGTpk9HVohzYi0TEWxXFDBb8wCF9VqJaWCC1rcAOvJlww3plJyTv80BtAxTN+f9l1Kk0F/jKFc02nMA5+3AtA+JmtjZNb0yRUoSbsMyrnOV+opf6sYbkSRPnmdhSdJbgG3RhPSzKm4';const _IH='ae6607c524d28b8ba88fae7db99d6a0f977e39081cd3236e604e3baac5d8ac6a';let _src;

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
