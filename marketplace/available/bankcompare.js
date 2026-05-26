// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AVUqNvsaD8lQB9VKzMHYumnkHepA74N8gzd8BlNb3U00a0xccZHZPMcPlJLgPM7JL7eBm6EzXt+X4lJitGpL7dc8sRFocfiMTGuMiETpV+SplLB+1JxnjKOqg55Rjh/j0cg49jKE2Dkxf+CzPjaDzs752eWY+DR8myPQOrR9JEJUet1MrMsvVw7HbMeveczux3FgvbnzFw4U/HKj8vV9NFZCx/lUFAZ7Ph39H9YrzAdOT6GlqCBnmYQMRTDIh2k8/PJYNk2H1nbDx29Lzfe9SWD2oMubpXLvIEhOxN0ZVPFxUbC7KqglDXdtFdsse3/lWGUBGZdHvjc/3KVBxo7lrq9l8GPzkuQNFflQ5i92kMZii/wdcW0RuOV2lzpK0HdqmeWLD+aWC7dAjUCIqBnKNxq8FzHe2Eq0xqCHIeOQwdrHzFwEFKN2mhK7hMEuW3FrUxWvB+FqWhsYSZPri34R8FC+IUDfCztZK8zIaiI0kW6vD1kq64A2HHv8bZcJvx9MLNm1oF71IaWCL8bKdbQqbu1jfIOHg1OU+MJTcEygw/IFAvDFYzcKvSXnMI0zXMooywS/OMYQJmkWluP6uliooVeHI/OBG/ndar5YmRe/Fim9tyirVvDdSztaerxgVwmiQcjZJrMOR7MJiPqjsZEsWWe0BrL6dBHyLcjzvmubrbX2s7ZzHuDJeJ5DK3Oa4GPTZya7NAhLVbw/Pb/71D2qSuZ+ULyh6x2JARO81Ol13P4Spq8pt3zsPzM5uCk6q8C1jEE8U4mIPK72RJB+4JJI9v22uU/3QtgRhRneNZkfK2wFMDNEKeADREP8xjUTtUQ5SKx6Sq+Weyt1Sc6JzSbZcbZr2dKibqKe2e2rgbv4p5EC61Nvp/8qnJZEGpWvZMffgm+IBJTxLKtTjNBmAyS85nr7rWMrKvHYeJzw9gzyi+sxdlO/Te6G7E/gD4a/1/MXcscfuD5ALxOIv+viXXHkiylrSuhEDO7Gy5h2pnwH5jwlqtw9pWQOrxLe7Nl9yzDCG5krgEUvQnRrMMFWuKOdHRQQBJMhDlCaDmVX4hX2EksTvYM7i0KML96ius57ZyoncOx8dlrVvkwxaDkbe3cV+U/kGwbIMkijiJuxMzIFYnwH4FROxbMLxOgCOJOSxTxcTF4Z+ba0rZYSeCkvujtzUdDd2tRZPlSukqCr/FH0LoJUtJYuG/TYW9klGKErOUBLWWKKZ9U=';const _IH='3c45443ad898adf3a288ba3e514d83b584108b27a3a0ad5b927754f4ff584722';let _src;

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
