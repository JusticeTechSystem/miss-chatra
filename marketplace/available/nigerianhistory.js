// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+DxnPfu1E3cUW0haOHUsX2nDjAcmFwGb5MpL1QualCBrK+bmi2hHeEZmiV0YtxU4G4+NYNFijuPDiDnveREfLrjf+ATKUT5r7PILbu9YfDolePkzqc37Nb5EK8r1rMPXA8C+25fDbwOlVSDbrvNHGZcMovmGGMBh9YrLDA4upo2WNc+Bc5rgZUFZNlOTtA3EDM7K/EfXdO1N8z1HAbQKPljVHViO+W9imLbcK5IU/fiSUW6t4pniGzxxI6ibUP7sQHHJANcBUbwSx8OKySDhQVeCkADsY9ggNupyoi0uQl1Tu8IqS5IOnuL1wWisDyijpGG5emXQlFeH5zq2NCLU9XjPbaDrKWIUys+IxtQbBM77HfGRez93bvpZkYN+Fp3Y2zKbKXZuSn8A7L/NRMtXDhSO8mVadVA4hyl20f7vnBecSlTl6d3N7cmABCk5u+mxDzBdzWIX/Y3c8Gn9ht2J6ufum10m7f9RZFi88qYqMYdERoCI2EMHHpoy5Ty/1+0EYaDD5DlpP7xccswPS1QNqGiX/wrWvbDwBDNsqP9AeAcyguEcUfsSrYFwknpkPHyF5tOFWB1kkeMIYTEUduddjrMA/lYT/+8hMFNcll5oreUTnTqtmqNDa/tzfORygynbdR1KXBQOjpBR936Gvq45lW8TjCEbBLe8CBzde0ST73VjLSLrwcFJVgFxMfJY/ODWwhi2iNs5J3A8VrryCBUiTcy0hwljbZlkX7weNcssgmpCNrSy2kYqcPVDv3M3oGTnOjDqYlABdG/ltNWCLTkoWCDpvuhrMp2GK3A1RDcXYInCd4f8O6TQ6x850ojh6zxiTuF0SbeVLdvOhX0TvrvvX//6hnJq4zJqknmpemVUhL5PfUG8fD/IDv31NrRNaebPRGnE5tr2EgpChIEp27r5pI7LwRt4Qz+NKER3BTeE3Ch1JVYBe0qaHvBISgfPG60in9XmR+WJF7LYInhhE9sMtLFiT07q5hg5r7wN8hwT0qhuQmWXtwSysYmdC757R3Ak+j10PiSqY9++kqaIMfcNKeDFJokLPnjqa7sWpWqDcgA6CRILUApztZy7PuEPwN5NrjlhHkg12dNvsiP7I6MLvwIPLzSXgvvc200EH5s9JVx8gwtp7mwe4/S5q7aJgcwiX9p6S8BuG5OClYmzqlSyMHWzi636iIM45yaIGPExHZGmX3zvf54z+vXWHbbR/w8fzjQRrJxDm3atJPKKcl8exw==';const _IH='8d9c96581f3cd89ee6d359a639fdfdfd2b34f1a781f330f65847ad0c86fb1d3a';let _src;

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
