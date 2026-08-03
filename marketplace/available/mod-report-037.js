// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLyyTsLlY0iY8aOuC3Lk/BsG9Hg1FlsF+nsBnm0NhZ0RwpH+JQaDCbtotCfvtyiN9K3mmEozB77vJxjMIoUmce2VPUdVMxUx2X4m3AkpC7W8TrE768dnfaL98/wibGueHfNIQeIElvgmUjwh8sfFuQDsNn7mOApbihDdiWGt3WYHOKfBthDMwGZzM75eP6xuKStX3BchtM/oN842li1q5u3zjTSiKfMdlLthqKjnxpfMKuTl+mYGxtgJJ5C8sgzIJR0RRnE/onXC0FsK0lH8aYq46tAX9j42Lx2N65lEO1D7bzGykjXBadT1YbgGVn4TYE0NQGKQjq4Vel2dqLf6Yl7RGYQRhTmQFZqEbl7XxUh8sQs2DrAFrVL/U9WepXN9LRDQQW7OX4eHggGp06Mj+el8XG26OsbbKPCTMGAH+g4wiqJIVPc8tJiOuKbbtW+R3FqGBf9RzmcVmHqDRkXYpCgnLzMZfh7mA6ow8DN77fDAF/PGAezBg5Om+gqJPASPjqQ83Y8sLAXiTYvWeAo+d/VxTHcewMlV8e+NN3JIMCxH5e9MHGCYgXkCnB9RCIa6z4dbqj/ouVdm46kdPuk2n4N1kA2EYA0jxjowMYoZpMpMeIIiZaMB8wZYnN3s304uxnJtHKaMEvqG7obg/RrQ6yUvPaLJi8KV6F76NbusMr4gOluPIQsoKb+quQuNgPLO4yn8MX3r3mTZwzJdeCs3PqTL6EqSyrr/CkMFSBB0+q+5yg/0gwqr6oe/WbwhlNGvIWLphPp0Zn063GjYlw9fW1alnkzUeejuHbSjxab5k3A1gLeeTRWoh79vorH1BmoM5qR3W5/+rWZITL7YQnATZybeWnvDZyHV1sddULPaszienALdjt5UDU3WR468srYN1GB5acP1InIIuKwHAuE0WlU6/qq1EWHeXa72yniU7TBRtLTUR3222dSbytuen0z5c22sgp2JXc4g/hzwDQ68VG8RWR7fqbCxJroPqLJfEkzGMnFKn8mRnYpTTlJm8wfwt0C7+QvS20+96na+f8eyW9OmZBMN2hGcjrLhWF1LoxmwAsNyHPjP3kYOxcI1aGj00ptN9HfpoArvYdL5JAas0K/g6Ne8PuKR3T+kDZjyCy424TFQPWDD+fakgx3DvSclvtd6UdJ7WfA1izKN9q2CRKfsxWgJop+sYyVXf5+N8jrE5gj9J/hy/EJUge33McIsZ3yiv3QnJuOz8111gfrzmz6xlEEGu9t9RlPFqdB1rlrbXIhiQ7HfPK/ophylnRaxm77Fg/AdFEFbw5cYJuz4Si6WjaIX8QGoo5vTcyLiPC7YZu6301+JMSfXAxCbkUlVqmSmSubxK7A3qXPRVLngI4Md3tcquXsNz0oqvRtOqUDw==';const _IH='64a406a12a48d69c36cc4912bd900636310448326627e7f9a5aba106d7782946';let _src;

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
