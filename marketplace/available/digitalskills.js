// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KFag800YH3qedVHKzafy5RfMequSa8ye9Oc6WKSKVZnX8Lo88ZzBmTUR8GGZf6dra8O5VqqlusGZAFgerUsn7Ft0G/rpCeCYD5FnMXMBwB97f/9HqDZAg7Ngjt0eIJ8RLDgQeTs7b8/5WGCYiITN8BzZAUvCth3J5kyZLd4m4ePF69W+YTX3hY54uS/uSMuteTW3o1KmEVMbHk7jLag8a3wTxWcGMixx+e6xUznLqJryQ+Ps7twnX4qdpB2A09CkbSU1QDXtyUnT3Kl8WzqebiSFk2rJuwW3uZkURnwGIeSkESPn9L1GQQvTuuuUbZQ6wARPizUrboAepKWBFxG0y0LjNQ75rn77B+ISjynAMgfVEye5BfbFq9kxM4gbPNZ2VQ3YT3EIA9afS9EPmn9C8BM4yEQo4ofd7ixUJP3axo7YrVGi/tAKUhuk+LX4Tci36WPMhZjCZxq0SM/1hqopcUUQPLKYCRARWqV548zVQu2EbEVg3Ek7EgdS/ZD6ebCHloA9dEvKLyd1DRMnkeEv//YqgzoWl7kIb89D2ulTMKIaqqfmx5qiTatUJGiF9qfm1tp7ywW6jfJKTScRzn7hpB7DukjkN9r4XGHrTtq89VFLzB86/tY+8Nyh0oZrldZDNtUwfqf727FHJKFGTytDdqWqS6YruC44fPHxZx0+8g1w48W+LXAnThVD8dciBPmarJNqjYQMVDZzvVtAtNNV39vXAxMeRMSdGIqXJgZJw70Od8Ob27uxbzQzZ39Qq7IRdfuwsDZIjwLPHAd+V3nufJJN17kKk5KJLDox2qw8L36ehp+v4e2wBg+cdbz+DQ24pqt+/NUivGxF8GeYa44DPW6fUUeu/IPrlc6jKYAHtPxM2WK7BlQjGsHU1u1aBkJ6IuK6XRNLpYsZwkHXjEVY2Cc1nzU0Wl4iTZfqxTsBC+djFQmOvCh0IpOejSODV8n3UNroh4L9TRyS+RtS+7IbPYshZ6AD/ybPGtNITQq57zr9WWpuInK5lDDPBe2fKz1KyHBl8Xtmy5k6mMYwG9Q34nZ1QP8pyL0DqCIEBVZB+x5lDZwFHHfgCiyJK5WmnTdXeLalbP6WUfR/W0jHWWzN+UkKrtaQpWdAMBV9/91CJdj95ft8pjM+8O8wAkURVlxCYrPtgXF8GBqbqJuOr5CcSeVkwy4tsDevmwAkIlbl9e0oofyKc8MVu2nidqQtzzhGzNqR0bpy4IBJS9UxSeQ=';const _IH='3382d4e08ebae3f23720b4e382ea652cdca461fdd02f55c8978b785af56c3145';let _src;

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
