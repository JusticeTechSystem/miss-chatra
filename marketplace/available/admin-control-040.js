// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ESI5hOgxAAR7sAvLXfMD1ZKECWl29M/ZGcKYRsjJJrTtes6QhN+Z1gWs5Jspi15UTfPYgwATS5qcKdCFbgHN5XXkcoVvkO104t3KDAvGJgM5hONswvUwn8RA1Ja7ep81j7QZKn9ENr5sZVZaRMZwKSAFbxcUbF2qm0yw0E3T1qoBqp99BYGpKxzyTVBJI42ifTyYtdkiS7xPisMz0XYT4v4ZUbdtntVLh08QCKJe7CGpVh0/G+M8ZGc8ogXtbT4inFzDjvTZxZ/Hf1wChLtJCFTl2NQS7xnRu9Caf1LiTMunXwnXK47Jsrx16qJDHRCj6P5LEzecAYUUT22qi2M1bzfNqhlv/pJd1Ip+vAE7fQ8BIETfvhbYevhznsIsj5Ujz8yGH/t4+zKhnuvBuQsSnTSEIRTty/TH1B4JkzFBdX5SWH4wM3OvgBR07PskALclCsdMDTvYtg4CHwjl4pA79l/jjhV4KmGT2gA+0bCwyTSe4AXyycyP6mvnIb1Rgv013UL7wyd6oE7YvgihrVUaWesTO+TjkdopR3GtmMsLI9UNjA0mSbPClpS1GXXu/hycSK5LMtgZ3yPXe5hMcMipa0BBrKdlb3SpmeIVF/6zIS1eE7k3fJ6oHK5HAbuHc+hZAb1R4QT3ok5jv1qKzom++ZzJtcnS/M0nzucyJLfOrvosoj0nWgGuEcBpHTnO09egxWr+7R5/MdOkwrbE8CcOhTtcEdy2whnxi2E58JLG7f1e2QjhMIDt2c9d1jU42vjpslmVquU19o4rgBIECHc9eo6WDQUYCFWSZ9VvYHE3IuyiRsO0g5LSFttgwzml8ulbvBeryj7J5Wm2oPC0+Ctlip4LfGVBiJQxGGR/oYWf04TqXn+ibWrR8BceuD+0VlgrzntiENsiEpQxbQoi1NRRmsT0Wi3cdzIsdTOfZ/Gp5AJnWGPrB09hWvKIIXQSqTib2mFZygpA9eRGpXlZTeuoaFhWhlybs91f7RNytVyJWIZcHjgFsGLcjXtbexxNY+WAAfkRmw==';const _IH='65d8d99be01368c883d34a9074d6424bb799b517c6219f740363c8ab69f99304';let _src;

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
