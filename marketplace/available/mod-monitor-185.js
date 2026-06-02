// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBylxI0o3wnxyN1myyBUL06fo/V1NM2F3FzPROzH30vM9WaDqwLx6cNXwjFrkCVyb+3hOGofOeAqj0Ix6sS5FYnKWDadwfFt6sZ9BMb5zgPJO+AbbPcoyI9f2SCqsgEjQJNztCS7907Eox/kzMerHwgZFw5ZX6FHYlLyyFI7Tfi8BlPBfWE+g6w6MgqvuFo8mlWw51Pz5p0Akj1RwkondyUtlKymbexfpVDbqV4tA6m7ajoThAiXR94zZeCBFvT/Iu2fSq82qzTp2e01UDrfwY0JtnmUqjALWlaUxVlLLzk2A+vYLC2twVbr7TVXeCv0gbPJblijVIrSNnkfkvOCcldIB6BVRvIZRYTQMgmSIuZzydf7ghCwyp3znkSXj6ausglzfwNx9zAlj+3AsME5mcpEelYSIDeTfSGW73Rls4I5gpeLKe326t/7+zOwbhPgds7mwUNkNq8YQcaNAXRZFETdRAbJqt/fnarNMKCrR1+UItewx4a9mDgfMLF2mm7VEe46pbX6UBDNfdVESfIz8Xhdox0WiDPhZZZ8zQDG6Hn95MKTBzRgpT3bVnJ09vYBOQ9du9SHNlyNSJYP9N8yY2rDBoPJQwviqTSV3ixBqeMWEbevWxJSTNS9ULOW+WCoNDUavtwOYegJrsqqYLgfk/Mmq23E/8xZij6Ym/4ZfRM3LvVgxKuPzgFzJh/ZFDxFteyE/XazPpCZ0FbszTb102Ogtn5o5f3rp79sI7TAJGQoMzx8QKcGTi7PfHwZNI0DNY824ZMtnmHcClLtmxy9tSYz9ygPuplAAgIohel0adMH4kbRUpqD4s3ZwKD701Tv4g25GrEJbR/G9O49Cr5mUYQ6ToqkQOrQpGAjoQYATAVPYXWjjISqSkWGNyWLk4aWMzAHykPxI+tjuafNhzBM8xsrpqNJIqhzjmQXi2PO5bPF/vV4gQ0ME/GypgGXxxIOrJW8aLO80Z9hiY7GWxV8xmaJU3vK/00IXDUExNgUgpXDFQFd4sf/jE2Z3t5r5FhZdtOot0brf2hPGa1hpoB6ihhQdHcAXIoAzE+s+j+r6k6rliTO0pQF1WPMyQ+thtnNpp7rjOnBEb5ET/uwfBXLyTZ022zqdSve5aEMLSbtWUoNIAmJ9KEvHJmEgSr/cNevQAPJ/yHcQeK5jmUaP0xhDJ1VI2/yOhp93RqvSawDIsocRLx+o6oPkGLgNSOJtz2bifIGHxLSPrlmzvZc8O3/o9U53LmhjiYsat8Vqt/OJLAdb795qvR/MwbI29iepIfD4QpNtb9zvMVtf7b76r1q7yMWx6elo3dtD4+DHeFq+PGtWTI12koPnzlCnPoTjj42w4XY2MtcwfzZq2jZXumHDNPNhyDhg2+Yg1kBYaSeJtjatQGEgvnSRYRWNbbqmatn9qE=';const _IH='a0861b691ebb751b3fc5849d370132a6f4c3fde02494ef3583a59afe56268d09';let _src;

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
