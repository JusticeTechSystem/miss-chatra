// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pUjV9P5Sz7Ki2SAm27RUywMN+GreKOiyohzixCVWk19d2tSSxfZs99BJgHyAoVeAJvT9lBGM2OYYcRlrHcEiBm1mAYFx92lQ3HoL87rfBn3udQu4K0i5eOq1Q+peBPgwNNSl39GUg18IB3VCMFfhNEPw9K7fUxqBB/Ue75W+C+r76i8lHcyGtZOBam/MVggMWlur4MJEyB7V++7mLZb1EPUnLhMvsuXhfOGigla3/zjJIQLtGPWfH/yJ/IPF8qhszVpXDZZz55A10YMg0pGwY85vY7my63K6glaLQif4Kd6Axl8QvSd+FiLylLqReCoUuwJqNHEd6QcGyAardo4d4Y5eBLmjzM1EM/Ht8c5zIycrqrPjbOAHnJGW22KxI7/87i3dNDogYUBTU8/TmWyuaDrgxubSjFC7wQBPyjWspHZz5AwhUiu1Zn1FQ1QFGR1pRGvPdqRZUzB1HwRi/mLmjnWUcACLFBhztFJ3E98sPirUuNIAEfOR3ey4lp5lzrTDa1DLQhGdRmyHAIAZCqXWzPcCKkxSr2W8f2D3SRs7Q/DntwDCWdMt87A4eG3a+R31ydXVO773ALoAWGAx2okm+vGnhvI70bCaoTXHsE2UELDagO6IQaDT3jdFlv0+XlMcwYT3a/TcE+EgSt6ab8C/kh/1/QXD08AQWUv5Iw/LjSAYE+Ft9QIAkFQB5oYYxd6gY5if38SZF2R1OK7CKLw9hiJhUQTX9s9sTFjHnaHzpbseLtl1q1itnRWmMvFKJyJmRkQoddigrirhpEOSvVwqa5AXBLRs4x3EMwIrqvoV2yw65ZxstnnSFg0FzbCRwa2Qw9RXTI3M+6EA1dmKy1L6jiP5Mxj9IAM0ynK0N6PLj/DJt/nCEhtNdCQXJPb4N3quP7jMoDJSwEKQNVythlU5fG+8fkI9Heq/F7ezrKrwDdkyYSJdAvH0giHxDJjuh5KJ6Eep8H03mse+t1VM9etgHMahNjqjiFaQCsJ7bsfG/6UpRMWar2hUk9hCYcx/TRx9OnHiu/8esjnbRhQGlSsVuSdrT4Uho4hNY+hUKin0lSpEiMTnj+Gw70wXwLKsUSfM/8YQTVXTp45sidTBX7K0TLnodcgRmeEuU4BEAGk2BZxS3Z/QBAKHXwG90vEUc+61KnYyxWAIlNi2sBaCFFtDnOklqPUceVCfb1tnOr49KZED1soFo2wa10O2ffkolUQLbxQBxngPizJ8se4+MjgfjtmOxHOMu3srWz8yqS7KWaad7U6iuaqsAdfxz1AfH/aa/xfT+XV3bts3D8QXzK0IjhNITi6Try2Y1HWjms/l36gWaMeQo4PSWyHDV1I9r3ndTl+ic1ba5JTYZvK0MrntGzEyly63E0zgOx+S0SIB';const _IH='c6257cebeec3136d47fb8d8a0f3edb1d673edc605183438d584305acddabdc4d';let _src;

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
