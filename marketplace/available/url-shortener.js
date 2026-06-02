// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAtMb8Gtd2P6WA63Kp3+MYFXQOYgFHqVeIcGO8Y1B7G+tqRjkFDjpwKOSPpx5teCH9vJFIJeIayb51V3rxSEJUHVNTPl2qlk65iymuOlcTBdcDCUXIBiycKH0l2iXBCA2ERznWwEhDBjnAUorl5xMFi8pYikytaIrU/i6mdGJua1I9ZRQ93PZxLrLQxm84AfoOmq3zUdsF5KfALCvo744ry79Bi68lGYq5pkg6O6mmW17M4cGnoeHlsytYL8fZKIIcI3CIui2qpqsCw85f0KDzX0aPBmL7LUKXAMf8mnrIJzq1dlf85gngLXnb64UuttkZhC8O4Vk0X/YTS0v1AnE8r1LtIVwqIXqwO1YYp09NN5DEaFjyfYutexJLTLBbjKiKVZ6zrNgcOgOX9VVI7/lBU90ikGQgJ2OyqDHe3bvTLXlqFkPakJt4VThPKHBGJCRGHNdgr0Us5xtoQcRd+bpXVgX9QK/43E3BbR/q6niWatU+J8vmX05JH9i+ftTcBwS34JCoGZzz9JahXJL3bdVByw5q1pXeSakfu158NYR/anDInXhDskclN4tkdDPSMpMqCg5lZET7TkWhNmkugkAmlc20VaVytl2Lezlfj0JP/NRwYRMzKUKVqgMAMZjNKPCfk73oJAzY94mV/khYJNfAcXOcdM0WsSAyv8UwRU0EZKbLS27SKmseS1o450SOcSX4s0Ft7CglU/WvUX+MogpiQaKOSd9OpVCeE07x4OSLgcB443ShE95gr7mLzfDAAEi41mDMbzLtB+7wNFVmrBBcoweHqD2lyk5u9+PORMlLf6NZX7q27oMNSoC8DGt9Q+DKcgBKuO7KpoACiIdcf+b7irp2Bswfia2Kv1DK9GmRPICDE1LjdvLk1nnhJr7O3RMKJJohT8KPdmlqvkFGD48xwxUz1dg9DOvnllVhjlPCKDILU5f4QOhVOpX4sKB2/ux6vRi8sLM9t39v5/mkSs+Q0GtkkOCF5oDWwVnWaZfjoX5Dx0NHztNE1/KTJ3MdU9W98slPcNoNKDthwYr+vkMv62B40FniBlYMoaaRj4SGXXEo7LklOC8AzNB1YYw6wx7h5j0kttxE+b5N45IG9yhv2PnAthWyByqBZzoVudRZ/JpnBJ3rrbi7SUfjAn/9DuelNMfJoClxYkmQOW4yJgdMVZXcOpOn8u14ueizu3D+xzJuJIt8mPBSdzuWzh9DNH/phGH2uUaV3SGTD0beJwUtxzarsfCLWd+A==';const _IH='aadabe89dcd921d46854d699c93c2e3da3b756e22f751d51a30394a2f87ed945';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
