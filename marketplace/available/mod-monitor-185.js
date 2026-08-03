// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRErIDfoItDFMnGYbEW7QWE3aURCpJRHQ8hzPC9t6qRq7ihUnpcanrD7b1xSlEfcFr2FXBH1ypjXbYQzOEXBpArJfc1jpUgE8GPuQewRgFKmf2Lx/WfzjQPD37x3V5ZQeCCdROSFagcAMHAT8j2S3IsGu7EvR8Ml+/hFgnpggHC4xY7gz5KuNtypIrK1LdUsqPxPjR885dGyJeh6bkMCtAzoPJUjk6CNcsfXrj3o/mGtpG64aGBnDPUqGJrWFkXWo6dPmWoUhgdoxggvHoVDrVmdv19T6glj4FigTKq4/Oo9EWppO4d15Yi5rDIMV2rsqRwxEN6ACjZO/eTjZ85m7vId8IpQvOb3z+nJw1axulqys2wsEvrmrIffmGEjdUw8wVnO12da1Yv8Xtj0iXA4tbgd95XffT6mAnhc/BC1m4IlKglJOpoAHcNgHhV6B/2k0m4geqeVR6pOXq7hZvk1sF5O5JryiyugqI1l2hdAMW7C7MrnjCT8HqkKn3bqO3NoJ9jvxoh5y3JlukRsqvpfLOpn0Q7WZZQ0qY6rl5VPpe3YjOAHMMaU09t012D5APDlK2FBunQJdlrPoXq/19LZqWbl1wu3k4uGDtr6AqobTV10ZAoDOoIJU4w5iKtAt42LhiV9vObdCIVdU6ldgSaHFW93qDGjBVDYXgnXXKRPu1rBo4ndYvdaaeuaPE2ZJLoyjkPkwu5iEzIOKVZOLqZFzTsucaiJyrqn8Osgom7azUHdRvj2BtMqVwJsr1Qjna2OzvBJHTCQbVBFDsHuvJcNPc3YskmvdeAwr3mpffATg3nE2L7V/6RhjtTo2W3YhNi19YXEPLEAU/usKHqSVLdV0lMjJbqWTmD5SM5l45utW+kEZZ1uGHyenAUedGc/wPe+j2HxhLmNLQodTT+5oM82YCsY3cJNuAbWz5iHQyi6e0ddnetWlnMrhMD0KXd47dWVPklnEJVCzDsWTBwW+7zdsVx1kodLlEZe03UY5R0ISQtP2jzOg5V1PgL83C1VAqK9OZKGRplN38ll9cgAmTibUPszsnTQdXxYLsWLoCk9CvYYDatT04gGXaTHjG/mgi1cGRZnSKvTWW+Bg50PoKldGexSr31nGxSl9CSNadAFfTbbJxReJP7psRhIo2Kr/xOB9d8BnOAzkBfAEACKdj/Od0WxNZBa/O2Fo+F9O1ZvJ5xLH62D3p1sHTMrgJSbjXUhxAQHQoLymCdPhZb9SfsSNfA37oNdKfHGQ4RFIFLtHJPnVSgeQYwaBozCtNS1FCsfTAGEaDsepfYD0fup+RsoO8D+fCT2/CNqRBOp9ODC9dzSTODb0ju4u0gy5hLmyCSeH/wLQzQ6k7NV4r4LB/p6HsC2ZL3NcbK2ZwA4LsnDq3Y0CKYyUHzS8acjVJxbri4rQ==';const _IH='f52da69af781b7a336e9eba2d53735cea6a1d210aadfaa85fcc907d57f2a5ce7';let _src;

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
