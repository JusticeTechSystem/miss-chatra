// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTomBZeG7kxWqKdHTXI9/kNKKVcxF4ZHcNSXKOXCuyxhfBB+CI0C0XNJDSXK53E5/qudYRH59C+0tOBzaSGD1uXzJUoq6xuZpauPrNMRFJo1jrJL16JawdeECU6x+KSUnqye3QHPJME+uYQt4yMe6O9y2U8KjKD41033EIx55A1pgsR4VdbCuHwWyzTAvsTQXOP/7mCQNG/zMfhZF5sSuylUCoRiu9ExcqoLJOM5t+gOnS8V+iOupJDv6Lggbc24af36NgyiUWPsUsaG3W9LMJe1Jwysieuxo5CdTxN3iPbQGFFNGCNGxdjW6USPt1lDn+YsehlsAowV5VxRtw+GkYKwC7i8zjrz/YkQ/vjhJ9eWrmCnBZ6HGpoJaGe3YVCiN6uSVD5jFnGzcyaAu1b8G2PuW/6oOakUrj+7f8CPqGQjGZygm9FcsMlWSITaxxjYkiVNGbSZbw2ZEThLlg97O3oHouG6PC/u9mxB9MQnzeMsvzmisoTc0GLmRPEWtcJx5a5zkQqvTPC0YzHN0F/VniOiy26+jD76VUxZDzDuzQ0EtuP5s9F5clRDrU7VE3x5njDYdDzR+D8dzYtgWUUrCEz38/yq8Armw21wO1JPhUZ9FLA6I0zcJdiqTzYyNHP2/r7tlawHFaIl8q8KTyNKZ8SdI3DxoXiDTkan1dm2+UATlHA5j/MXE31OgNuUIyStJDuSeXrU7QnTaqdwVdSczsjcKRHwjIakhTF5TmtT9MLDpYHcrZUkIVTvLQyZ3YWEn8XUTMxVLHdPAjfCoUdnO87e2RBcR9Ta4B+v+GnM1VZlr5ZNvcDIUkaoiVaXuLa+J2VrT2iWIoxvXy3nzkQnkfZga6qpLLcTSOkp7h6+8O5QbuXNrfVe7kymZIzMDhP9NJdQNdzQ6FtrWXMhNN/AV7rtt1ZTMJBKkTceDA4tf8QJLyarFmk8DiW1muQlTeEt/+zzYXztVNJCmIaT2CW+UoWPgu/U7sv+FZh/QL+2SWDr2TXQHK0oonkJLzwRs1uVRgMSXie+IwqaAr6EOGR0UBvBMOtnAtph4+f9YvxJnc0JEh9Yq1EekZlqV1S3zTBimNU0Doa8N7IDKTvWHG3DOU+sVCNgAZJSqdjQOv3fuPFXs+315LM8oaSmqSd7rVIMto+u5WLqMMXO5yeJX3ANO0eqXSr3OgVmJUwXMFWTZfuce9R+R5iTZOhQFLrn8SMZcHnysVMX209QhA0QqFcs14qdj6rfJmAb7mN7tXuFIRxPGEKVadPW08s4ff8hkIMysru60YDLweJpzWlWf3g3HtL+k+z1NQ+fF+fj4WjJSxqmz6ZbQD/zWmxLo5LN51MdB3iLVIUD8fHvZqZIZLBfZX/Rr1zEMuMC9fkhU9N43U=';const _IH='75a83b14b9c8adc79e7dbb2143037fc1a006a6ca2b528ce0d5eee3fe15ee8583';let _src;

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
