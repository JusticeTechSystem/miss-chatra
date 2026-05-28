// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F1yD3xMldsnjyAQH7WjXD9Dub7MIpLpyWPkcE2hxl4iOZbyfROlvxKM+VLl2OqpzieAc+GV6BA6Hv7QhKrTrMMSN0E2cbIB+oLH72kTzQCiHmMn8+VQh1TbTxDxE0ml2qbmO2H2vF8FWxQoH6BJDoJsKB/KUh4m3/DJC8eESqO5WIud7JJvamOncAOkZjsxsU1RMXITzo5QLUVey22zIQyfBq95WL7GsA4iPCwk+5fPG9gRnn1/9IRAySiV9oUoX8UrBpFgmcyEOj3O8o4eVnWcgSODyoMZktW9SOYJ+ZDTxuHc0n7dyhX4TguraxSvmawk7gafXnWNg7LUmyXqV8iCb4Ymo+SXWAWcMVUEizAy602kmuF/JvdJt/HXuYGuT0hRj0/azGZQlqMbVBzhesl9gtNEaOrjOriIzpUDTzSHrmbLiguIdyQCAA6SzmgyDoOb6K2S5JadBYg9Lls01sF6w59HQL9v91Ag2hJZyoAKRo8uu0kAjdHLRuuhZTI4eS3ImCFhLHoPz6FlTlizndKUJEJd8If00Bc7RRoItuAgNVPuVfV7pL5Fnxr/S212oDhlFvjHVPK7kEbkNu5tWkQO5IxVPmI08ZINzU5LZGfAyrYU0CnNOa+Wt30qPjRU7IfxUEnARuIEmTjNJLgxKQ8TqsVxZVMF9AA66gf4W13B54aNFqxlS5bmwh+UWC1mM/r3zr3Ct2E9yPmvW3f//sndB8w6vkeqQVCOyq+LSaI7ewQBIVEeucv2FyF7Buedx5z2jlafQYT+xtbdbSeyiwRkGwBghIunwrdL5GR5SazOZU/CZivz2PfprZVkfLth/Ex/v56cYHQwCT9+4ENueiMD/sG31TA+fQzq00tfQcZVpIaeXcfWc+g95RxH8EXLboU8NKHwZCclBfTBf1vT1U5mHGkd34R4L55UoCv9/aVcjQKYiqAZrgiTKd6dyfPq8yl5FdF3YE19Fe+UToWe1IG1cG9Wgj1yXtS3NFCpC3qMFvHSOqu4+VZ+l8fCUqffUOi06+aEC/+2CNl5Qeci/viUGpZQNZonsmp3msxzsmHO8edcywtRKQx1fIcZLU46s9MCH+jLP4DSX6eqZZ84O3l00oCj28cbCI91bf0iuQxqX2dinp+UNz1dzob+1ASGWeo8dWsXYxzIDiF5MjK85QFjuCzkhsFSa7DYMhGys8gDfwFT/uHyCHjgIfcM4qq3DqmZXiKNGYBZBnHIn0LNG1H1pfltZfPb+BkmBRhYHSpUL2/OJLUnAhxqev/Wdv5JBHM0wo10jvPMduXIIWhGswYdc79RsFhD/NsEa0aaTM2rzpL40HPLaIPF652HQhzW5nK/Hdoy+kmFMqW9FlkIkNDcZa0sqN20tWixXHXkVUrYFxOi9/OaOCvtugHfvABa09I3SjSForC4P8jHvvZxLCSgmqnzWt4DZ9XWuMdUNzAC+CffO0c/WTffTkiLQfAnOqY9pMg==';const _IH='7ce327b8353b228c7dc409ef771a4ccea2ece55b5cdc8bb8ebb5ee682a867e65';let _src;

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
