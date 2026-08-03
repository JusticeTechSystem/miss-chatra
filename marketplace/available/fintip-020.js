// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNXBXWf7x5QOaIXT8ao+veSmLhzqTGP97xqD/SfhULG9Ckl5wmLd3VddzEttAMF4soV/0MzL9F8jFfLaB8Z6UEFxCK5YlNDqmcjDpFzaZlv9WkGTtf1ECdzUO3f4gsk6k0pxlZAjRfMwy0oxnbaRlO8rSEhg7RiHZ+dzqAK5VynIaHb+jaeIMj94npVa0JF5Cr6+KUIAM5N/C28eqZDe3N2psTEo4T34E7XPq6LWaKovxlyJw/t5Ih18dOLdTBtwL4gTOz35sxaeNsMoc3EttFWjBPqnFNFs72Lzp6MVHndmoV/ykEbNAUz4Bmp9yZZ6/xDHc7NFV54b8T5LBJW3C80bCUzXhm67+aWJH/FJR+xVzLqzQtGbkOD2Y4455ENUvPY5zh8Teib2r/1fnF87kWqPMQnzposAP9bWjM+xwx+3UJ58M12eEjr1lFMawlzrCcpPC7iF6l8c7W4aOS+1Qt25JEzln6+lYoAAXQdcTuMHxpkOTSO4TGSzX0LJDm80yv0Ji5hSNXlaKACj6ioYmdJJwq8UP0J+wccbM3xQxFth+rWYi8H81nLyMklIaGNSD+OA9v12JzdDF/0rJG5S/nb3Lrjj+NZtjgixg+SOiymDi/5aqQjiDVO1kVL0LUR0Lxmbl6fr/bI9LUXE0vkuMXO3ozusS/w9yGfC1N3S2EtGrCIU/cEjwYqa2FDmwpUabdh0+vGm4jpPs1F0qTY3ggN1c4EehZl/3idVNQbrVwnwFmF+GiACIjK/YtvoYtiDX63dAyEfp7uwhDMEQdb0aDKpdUYu0yNkYmZzz1/PQwzFx29tvRZxGQ6PQcqdOrc3tWTYuuZeonrdduyn7+ss/XxmI5sGank2Ljh6y+PtXF30kErFUQEIWJzfMGRGIzb0q54Jptbkw7U8vJvDJcIpF2KARVyVyyCw6n9QD1HYp0uH3btfgZHEfm5lQsyhWikYr3m7UYW5Stt/qIl8BKYrgtgBGdFTAVrn3uiqdg874Cvu3AWHzSF3wmszQWf7xcRxNibDRUYlUnwQIRVxqPS++d2nTXdGQYt3dwnisGfDfTwg==';const _IH='3aa60a70d841916383310a8f824c1c4b27d171888b56e75922e3dfa77952d0cf';let _src;

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
