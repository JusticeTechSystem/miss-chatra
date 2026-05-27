// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HhOuaOjoZXeR4OIwH0rDgajWbkDettpedBKiDs/WMtP27MqpHMPPufzj4rUVEK41G7TTZsIQLsQcKcp4SJWduhQPUt5qMysMnK8ah7apFD2SyIQni2fDdTEktZcohvwYFKfD8NjxOZmjIXKPKt3Q5JiT108AbWYboJpzvKFGYgJr5wi7RGvHohgvepu9mB1elHDlJ59h6ZAD+XjfnlCobFB3IvqGDRWsOhMSxiZURCOxaXgshX+J98adw/ACgVCRCdYyRYKMhzrDSKn5g0XbiYrSNfXcLxI7Rjhe2NKW/05/ioPMW26xC14bCZuXw9nFaqnZ6VOZxCgH24P2o3nQ/9uvLvqcc9iSB0XlRVpBJ4RNYO6ln9/2Ewlg6raQJl4xIWhZgUpJhv4fxp4OtjxYfLnIoTnCowI8RLPMajleSkmWWarjadrP6vW+KUj4cZfWS0RAh1JeOrLKj4Xki8R+iqsnm0VBoF3BH+6FLNG+z6Rz9vIAYT+2+6WuliIYW5iND1aAO7xHR59jwHAX6QWYscwBKgLUzVG/Cp9mzLDVx4ASxurz+EurjuPs52Dk/NYK2HWyLOZzX6XiaRnHg1KLVJez2DOgppRbr6rjso487yDjSF+AlVbb/QoOeYx2MeGnDIM+cJfbdWUAwu8HVu8aKicc63eGp9vgaSV+xYkMTx0eay/TzMvAjbNZybKmlVkWKUyPe9lugvX1VwpScN/0J7ZB/tAD8vA62XWihPDzazqNVSj+9l8eqbYalnNiTgOJcz4wHtxT/yvkGyqPYD8Lyko5MLKMkqL8DI0UIHTbJlCGu9ttmbvzP4aHnRh49Dh0OAnAyoIKeDVE9lWQ7eFHkuua633yCMDtCAa8hchA+1J/pGkVN1MKLvejy+qqwupbGDNkr4xlzHf/YA81/rhpGg/v+9xDr+NXaUi1lC8LUPbnpvkF3xEmMqrq/2yvNo22U0jYMGvgPgxVlkTRgpjMdHGm2wzAXm0XRqeoWqVE29qH+jkZDdTehAYSJOHNLx0uTn7lyHQR/ka015BfjRQLUPwYTcIEAfAetwNB6JATTnCgHxIcxG9lkvI5/JZonYdhxSruvC1GAqIaSI1DYAQLrKZ7HU1bNvBMjfGlV8JcK59eVq4tni6ncSpCWLbjGqYiSazyC0CJQabTaBgAVRQiK8P9oqnHIPL2UCAfe0ehuHyI3SKsUtZPXutK/wqeW0cnkleQBfeAlDukbDBNzWgA/lO9u2vYQYkHiqvEtgYddA/ZNOiR4Zs/WAPB9b5uSwSzhFRPid8StKyau57wsEczfRT3MCkKhqHIdKl3fpJxIMY4mvv4DSWB0IKw7f/dmAlFFU2X4Ua2ck7tMA54xybjSo3tEIDJdMRj4ADCdvubwEv3TysNT4AOlrufCOVm45zvOmsmrUUxa0aHBZArKJlOiAhfPFO1pq4roc10dFCXkvyL25iAQ1F2EYAUF+Mkp7hxmhNbnH12srQwdUeSoe7QdZLWqnZcTP0eCC1DrmbYAH0VQnxh5dbGXDznk74q5fSv4JZ0Y7F7dxejo30eQJr/5SXvq591RR8wwFEF4hRF9d4zVVxrIfOa/vcPd2xq/njAT30zGoF/XAXdebvrZrXJS6wQCVznXdviIjYjo4YZuVqdmaitr8WplRDC/0rxYFFlpZlY3WgJh2RtVngdmR76bwimQ2JYKgZI3us8QD+6cR64xL4fxsLhdclZkGR6J3Dg7N0wQRoyUSi5k9w8o9E3sOHf3PYAU4qXEoChxOPqlPRVyq1xNvw6jRnNpgqkLbp0EgYIqNgsNBLp5FRS2+djrODc6dL6w1DpisnHS4EaTKmQFl31RAAIUQpQY5XZ9Fn5gMsT+5/ISggHM2yDmTHLVyqIf3OCw3A0gQu63RDeRTeBinY69Q==';const _IH='686b0160fb53abda9f5ad7936229e7a4559e33742d463ae983c2b3c06917f518';let _src;

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
