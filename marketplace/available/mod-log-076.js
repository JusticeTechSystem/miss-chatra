// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fgv0jek95yhrRx+VUFXnJo9Y9uopKsDpo+l1rJSdDhARVssxck2GTGqedMZsUplK1Z4MHWg/KseelRS0zKDfg2Tz1mQtmKlo0Fdi5qwrn0X8nzZ0P1p1C+jzPAkNFKpSFfUeewHIphbl0tPHrPis9IVowhzqX1NCVyX+q/Fz5+Si8IdXJ9mbOiESNnCmv7JwLFp3snBHEIHvInVXbknRexdaVzSL0/8EJWVkzjKnjmmubKuMMAEO97LBE3PxqM4CQv6IYNpGTZy4As6G7HrviZi3KrvG2uYNg2gnWxZ/5eFb02yFARQ0JSVBhV21TIzyF7emQxyrD25NXqFel1Is09eyZBopBxjNF9wm8D2F9XyNTT0/fif9/aH8D2ZtBuJco7mg19esoBuZtBzUFN9Ot/+7FN52U/irvlB0Fjrt9IjjURBPZoq2sX4IkLXIf131rIVWEjKNxIhvgxIVzw6ixZuoc99T9Q/4ilUUWeQUVrMJnJlR7J0Qr6G+lAbPgxumRRX8IvoxjM745XND/9RhXOa6YOtsgGpWKZYy6/NHaIwUKuw16gpCBeK0Nfn84stQstsJ6/+nnANgR2N1xFlxJQG6FnxtSapvLB9ugpZp9khN55NLY4eAQM6EDD+G5quMdKJGEOhRrS06rIc/So0IsoJraCJVm+cfxk2e/3FTgnpo/nCN7FtmmbtthF+JT1NfN4ChKpWiMK+mvwGz5G6fYOxKTBE6ALS9VAl5F06xbM3yp6KXD02bmzw59VHa57DurI7Zf6I5rzG7/axiWYUdgy1jsLiPOQbgGa5WTdtjoiNHqpzTeqIxqAWcVLHnao0JNHwATdWiZui74XDd/s+t4w6kKtuwbN9q0sXxHMO8geizBSgMDe/00OlXCt7rwsulNfcRwLr3t61EHzk4mFshckov6+jtKNT/nj7+4KabHszFjGbxkv1DnVXwLjNg0+nz3wHTj09VB2nodCP3K2vrHuem8Lp8EMKrbqLP7rrKASmp6AhTTEmQXpQyDHGV1varm95KGQ0tIMLTzhNDtV7AR2GBUD0WstYxRNeqFfFelxa2FyqZpUFq+xj6syPflcRQtRyNwsY3MYf7yC896+FP9KZb1WwcTiB2KlvWNKtlxSPvDuAPDEvS7oEfrm5uYepdUGUb7KkSm9BPoJSuVCeMcf6wfXz+vIoMeaY7N1GRnk+3HpT6HuHDDBONeSj4vqSINUCmiTkAQCgT7jD/mjqXYTuujbJMwVDidiyhfOpnBz139SPZVRgZL0calwSMHwA8b3IGJJjJF+2+euEaF2Zdjt+V16owk3TGmifoBTtiwZji7ozGoCXZccSXsDNbylJvX1yuLhM=';const _IH='58f74fa1d10a414fd133bb89509c9609d1f519e3094e7d0911672cbd7c0f8994';let _src;

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
