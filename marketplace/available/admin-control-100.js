// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkv937QgkZpLVgV/LhznD2DLBCiI/njPHTwjRJ8kMJo/qczecwHjVf5E8gI4r/ZSk+NrcuHFnyPpBHe8znEZyriSO4mDsLoEmmlZ1ElGU6I6iNbPukreg1YvCWStjlNkRR2VMqN2JAjbnmuc/m+S2g14mm0+CUnilXIK/MwSq+DFX05GCzqA3jZ1SoGY4NNyZ+vt6joZiLFbync/Pjt1XOi4omC9fLeFSR+3nwiwte3VrVuazF+GzD6F8tARJZYUkWpRrc4TTLSH9ZKtpjZct6vc5NSDddtK3E0+OOlPJEo3kgohnYlMmz081pmj+8tYkpNRwns+35v3qeIn39kPAicdu218mVGZ2/w0L7OcoOL6vz/6Yn+MqPH5EPDVPhSopU1PXY8CDq3UU0v+U07dGa89UwFTvJ5wfb2yvV5uZvyo+Gvag1Ncy0yamiFyM/hpZNLuKtIr1CAEuuQ324ExUe/GhV/NAqKuzpJbRb5tznL7k3Iz6F94jtbnUxnDrv7kEpsNlEH7X4fPam+TCBtjgtc3LB/qxxP7ks8Qxj5+QiuAlyNyr4uuADGd0gCferQOpETh52nJDLXoQVstb04OP1xzcCpmP+PgXI4q66vGycMO2PaidvVjzjX97vyg0njJJ9kE7fGrOlIshEgLumpXlf23WosMyMSoZlX/zPh1o72X9hrSi+CqEg58txYXNW+f/IwS+B2ky3oN2M01tW57mdz/ya6nz63aDe739hPXVdhFRqjLFJV11lnvBpllTGQMY98delN0RnUHwfdMqASk5ElGzSwWBSo2Qi3tQrlYUua3gXcXKsISq5sBBx7HAyMaaBxnzQKSW1dBOenIj8bHNvYgwX2KTG+F7E29C4yzcVXqLUpmfbiUI2l1nx0xcKDZJ4U89LQ05ihThRK0D5GL713rVwGlt3n/SIUpglDK/MrWdgLFjlnsu3lwdyUrKsTEtkq2RvRP/Ixr5j/pgEF61bb4VSUjEe0BlhvIWKhEWZoxX6a5iORz2acthoxjqt0tT8E4kmkRSipA==';const _IH='2cd002f8194438f53434142942db3835bbc2deffc1bbe8327a8d5d4e1b8ce853';let _src;

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
