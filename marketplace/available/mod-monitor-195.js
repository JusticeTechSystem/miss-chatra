// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRd3l09x/EBfQUJzhREhc7KN8hBFdFLG/DRwt/fw3sLzcMB3n7tajgkV9gck2WjunMDIXywOWi5rxqxfQs5/0I3I7MpKCBYDWiZSW5yw8DsUE8RhcTa0em3Pgytrm0FOPzup4V0IdY8Md46CPBSjCcDUq2N4bUx/aerIAAEH8ZIMXtMX12Vb9YWqkkyYWe1UviL6fZyaZ2Duu/a0tdh21rK4gxdSObOTw7JHOvjwaYVRVEjXlspscy1OM1ct2AsLUGdpLJXElpHHIEn3/fAPKL5BKAp60KmIKy0Yoz+gmzX43AgFPFMrQSPrI0VcFEipONHY20tbpl7NCqzpvUWGJ896ZKIJf9pNetCNp8aPG+F+eE0CqOrOfUqdthrDTldHl+AV1R+WfsXxoC6tWbFtlzidzSn09FT8xWi2akmAJXalHD04p4RvQrXEmzsUMwyAXoNKmAkyvvEBbhlZNVuNbEnU9w8DrP3HOVXVJFm/2ehJgKh07/pxLsv/7iPDLRCv/FZjWmOj7KluiBSotwCTnxqPrxox8INJKTuDhpl/VAOb/JYsbcnX4SE8mU8+8L1NiyJoFFztd/ZFBKVX514RHIZGp+nBaa7hZQ/WXIsvX6pBhbuJAGF9Pypvp+lGT8KIvUGOForwv9cYX3IjD/tiAADrlIhQFXIjOVjA+7cQPuo7Ijsts35V0a+lugl4rbA6YhVLYqvL7Wp7XxE4O15LJ4zDGIZXcxu4KOH9nUrZlYygbUMqNWsJbdjmBNlhZIUwxIjsflGAoNQFFIwTBbiu+3HPKRTIXh77AwWXs1uV1ye9oJNyjttIXXfugyQmnCZDL05TczGRKkVrTqSEgF7oyJw2PLuwszhgK0N+3b82MCQ7byD8+9St181DKUGoMA0sjH+i1B+OSbOqVETRkmFA7+uXIrZJ22USA3+IEkPCwFxvGiHWgZbv+VtaSDwuDgTCENw6B+7M/P0xoPQfGbjR/i2qfiIRHPNkPA9iJMLMPe+qQW/DjUFPE0GfTgE0Jq8ZuBayd7F/uQLZ18R34eAvVOinknWC91tSAWuwLujX3HzE5YASVg3J4r+fpLUDqDHsh7H4L126eK5YxvD6I/+tPFELMBUS8DNrMZrwew5m9kZ0HUrnPB9LnbRIYKj/ROXXg2HiX5HOizGAmn57D0/vIXvTeOo66SjSYFQvaqkNiliVzYVaz8wFfS4GtHoNi8AL5iCFcUTN/qYgbyK0Xj/OQKgVwsYYyFR2JiULJQYb/NOZnwPTHqk6kIzZq/jxyi1KMdLVJ7ox4lct/hr6AmbuG86cvhQpQaqxA/F5U9gn7uNNdKBuO6Qk7AaDf7JEhtfx6GqBkJMXNccQVHBvQOQQvYDiQGIn2pfsC5Mt1ULnd58ES60Z1aZsnEWhyQcuDsAnnGmLA==';const _IH='152120f888917c1f6646d731a05d8665c1159093c651d752c78b7c8d50f093b2';let _src;

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
