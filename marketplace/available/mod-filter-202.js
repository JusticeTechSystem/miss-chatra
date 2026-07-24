// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl8O3b/OmErZzH6pQN0Z/idNA7XWjfL7QMYY/x6Qw9/p217FnZGIFgLuGV3RC72DJfmJ7kS7+oshll6/YxfHUAjiNegZkWKnf3fFIuCi2caK2HqnWF/kxYJFbT0au05sCgEma+SJ2OxgkH0rcuhkNyeGpMxmZ7MlMY+mfCHFh7PEdvA7+MXuxHeSpw7KILcJlXdEFYsZsK+JKs1zOk1SDcyf16rMWoki8wIa979pvXYjWtheLnITD8uqML47q7rTfXt5R4SnDEIe1LSPq1NR+cPrSBZTNNgQF23xl9eIo9aXHZiHAbmZs1Rxc9qv5vOUyv4oQgVa0hES8ud2SOLGYA0c9gWO7PtVMrNuffYqmt9pepHjeGtFv43mPGgXw7BFvepMo3AlfEW0W1Mx4/SFhL/Hy1s5m8qT9i3QcsqQZGT3dPqUE2WbSrifGJLE/vT7C9VTWXsv08JLRTDJ+MrJq49g3p3+0oa3MA1wMhy42AeLfxjexjXRo63XTuR5jbALYfiQrTK8bT7j/lELkPr0MJfLH/hRSLwDA4AfrW035fu3dZGxeuq/1uPri4Ojp5Kkj8/GXMmmbOQWreUCNL/jzPf62oTyIoK3SZ80/JQvvHAAxHnyCjxdE9YmGkNFpt16cMV+nKWwDIpgj9Kh6C8sYCzHWGdUXJ72F3TjbzHThnhV1i88COe+1nsPzUjbv9+w/ii+yMkt9W1Q3TiU+jGgjer0CWRx/h/kXKF3DNP/w5HQx31lme5ffei0cbXmpWk0jTtavvxg3X1dMoUfpNcnMwJwY0IZxtYIju4gU+AFbO6t6x55Tir+sfDyUSb2Ly0++MaEIIlOwsKgTeuBConqB8AMD6nC0+WLOiMOZZKm9w6u3701cnakmaTG1X/JhUskABYLTj/kNMpEvnuj7j79fy9hjkyP/REwHklK/wf/SOM21fR2OsFbW9SI0aFvhFCu8OiS9JJIpwAK6qTSi9uVkpnRNmGOXKhLIehel44eedaxjnP7pWbX9yLZhxJJ19rsrG3lnpnqUM3fIpSvVhrcNed4ErNke0gw20T3H3feI+pJq+tAyh3yjc5A8WbrdgZXarHRMM20fJWGbXXpZusa/ybUrbWFQycKvMaCQgV0KegnuxHrXZMPdyInLf2qvGcIRjmx1oyU80qF0lPyPr8nzvtyXKLRSrW/GEQ7v4RWNL1sMuQD/cNv55XlqQrF3GuCu8mejNqY0r5SgUzEJEoZOyorQe0cw8SC98BlAMCaHbuEDADfGy5fIGeSMLtfwg78MBPBLutATUKH/lcxO+aJMi1woZk9MGFfrHyFYyFvDKLKxERBLOw1hm6WlYvtBUUscfa9cGjarvoEoMtFxIRcrhJ4AW99fRO6+P8mTe80phrmX+khueDo5n';const _IH='360372ca7d5f5799ebe515fff384855263795f4b025650851953569aa56f8d36';let _src;

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
