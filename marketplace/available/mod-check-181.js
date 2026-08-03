// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQxxJqChVqfndGgms7EpIALjflp2hrzKzp0NeVrX1LsUVY8a62PRZNi87WqFru87ObFSPtb4juavIh9nbbD1sILi1fZjpFFSNK2uHVAeWwJsOX5kF/deTeGh/HYWgjDuplmUfR89ButfVTe0G7kq32WOZbgMrGaICwf3yP9WnF35HZ/TB8NZ38DMgJeV7Xazx/I7FXA9fGYUP255dgH8roI4dKA49sYiADNq1jc70bYX4MhUHeRyBUxakcSLE8vDQRvLxvH5KJ5hHJj3VlG1Ud+x1tC18RRUnigDBscbi8mOwzAQ6bF+mgns3919SDSLyUY8JOu9nrc2Gcxurex8smfEgvBe1KlDwj7UZxqW4DDtgUfI9Ja36TiEkKo0WPV4QFFjnZ+2yZio+EdpXztI61JeRx4gAzLsChccD/+ZHIEnoG+YiOZxgARtwMF2GBGdih5RA8As8pu7kbG7aRGdJbbJDyiV+H1uRqtfCdbBnB+whcW8y65WRDfLmsviKUunFLsA023tTu8idYgb/eGggVKNxn5Pcm7AcC0ZGNyn6qviw97mTOJrquqnsi0RRu4xQyrMOnKB5fXlunobVABpRShGUY0oVlk3H2tmHVSQh4k+Yl0/B0pWaeym6tsJnhOSZUUOUDMI+XgtjbQ58rDl9cfH4uULQg5ErBjRJE/VzY2+mVups6MnG2pnv2kunPMfZpBShO962j9HA3ju+yCVvsq5+s2q6R75Z4K//hVUftlpOrsaEgqonKZ5elpMNT/bY2we9CUlZMSNJIMHPjgWwQ6TFVcPhz0Moe9/eDM9L0OxWh6GCV6REcKCdInCYAHy5roAa34uq6Y66VRat8faKRxq7FtxEnlVbLTf7q69jPLuLVoLJJ/lLuBw1hzxFofSn5K+XJoa78Tv9me//fgPLZ6V9sNU6rYisQd2Ya8X8u1EsBYxL1CxtXz/erocTHg4vT2QTm5XHvrH3J+s28OHj9Gup1GGU7EIK3hVn5BeIoy5Z0gX5326A6gNrZgviynlc1v112rrEs5mmY8qpkM40UDaM1Giye5GN4f8FpIv4SvaVFy+w8fpWU75DFU4IbQNoWSRMTl2shp4LULDV1cbCUFO3Myu34Q1IE8RirsWjTIq7ijGqWbFSZe33zqy5FUH5G0iksw+AA4GMDHL79wjn1yMAFKgnntPmiAK0gYnJGRZeEpqaNqwSIcQP9ro3ZRPfMm6NndHrD/VxUek4mZwfJm+86m/NP20+YY4zXR7m1m69HYKmsrC+RWyQlPU9ZeNJNF6zyuEN3GSQB+QcI7nzOj1JxoUzG5UzBgk8KxG4hWwCgqd8XGXZ42z45KeMoFsZybrta/hXrz9/aMBq1630TJnKAJFGyAgW7etc4=';const _IH='7fcd7c3fe289b61baaa3fef1add005aeae3142093b8d0c7b9c724df702f223ca';let _src;

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
