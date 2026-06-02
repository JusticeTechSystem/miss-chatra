// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9cZkzFNd0sVLs6Su4ovWZDSVzKElxvb5OFGvSxU7pNT7d1r2CyFE3HFEGdl1tOnjcdUayA+OI/pb0iyXS+DuauxnFiR5yOWLzj9LBBwwQiruUS+UiAUJBX34H+EmMDWyKxg2ECjfMWx54UAfngZeDMSKGHHGQbfpKXBIJaFq9YnYdG6c325gOwfCRmcorWxKgEKBPPh7/Y6AAh+e63ociJFKSuzAMNmnfExMnl6jpuj9HNTp+LxW1UXPRF8vsd5qvY4qEB12B+FdT2KHSA7dgr5MRM4otNRCj7mLQm11i+9ZGF229yBHeD3y0F9bezllUBCdpO70G72hjm2WodKM9XXqgL6/5Fg9BpQvpTsazSBwA2uYMiOaTkAU0GObpMaBfhD8u1VYq+dAcOTwPq7yP/jC2naOv/4vVyZNgG8xNovF/F0lwy6ZoBCcAREHNhJxajWnu8QDoZJw1m07IY3ss+zpcbHj5RLV29FsOmplYGHc/Af2NRVp5esLJjxLhkkCuLcfEPpLRauS81/jMILJKPlHmaHzO++XLggoVBpOp4Ppm2iJKWjzXd3qpxY7mDndzgiJj6MYgO+1mptb9dq/7AM6hZ3OXWF+QQRRDARb/f2FzqrD3/3EeiA7MB3RkGeExf+UOqpaMODnr8HObz6w8KBsvzP5KSA6G51Dn3lzKrkDWjWtB7SePhGRHn3mNnY0BpPkES/jUBJnmXFCYc+rXO5OiCM=';const _IH='717423d739b61bd7ae24f2a5837089614e4e5c1e74e128d51e90931588aa41c0';let _src;

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
