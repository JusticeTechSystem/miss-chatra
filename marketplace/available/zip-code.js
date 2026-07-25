// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZyimmF4wjp5mm/eJQtTogLETcGPbibGqIkIE48/BwASqjhXrPPf52s+Xz52XLWoG3kPGCkeUXw1ncIZ94bIoAlk9ikfUP7g+TphmsHahQE+MuSitjoGXilpBKWFYhM2MaW4iBr7YJlVv5cpLgq2UwrEkpqOODZkfHWuY7eTZauwd83NNdAgw8P77HxdiAVfqPyroJFEo/HEO9vDIBocuRMAeQy1ivc7JTG6hZO/37Ju7xDQCsGiYBle75GTDy/42DeSVeWT5zghFSPiy7YiwNoYsOPFOw72TpeG/gUgU+pCpTarKEIL5hjpA8gh/+HpC69k9iqT18E0rKPQf8waDVXgjxVnDzZQLsDJj/sRhrKjkKkW+Z12IFh2wOucsblp3iZeARqom3KVD3BpHnq9dSWp63GJqTzLZKVWKIMh9uSTn/d61aV0SGFTtWwSuInc6pYIEuZp2TUd6Yvpi9QZg4n2kzApMfAXnLPoPo2yNKIqveuqPxv2kQBaJv6245WrgyJ8D9IvbEVX4Viz9GQrPjrwZ0zl9V2NZfiyZQ3zrFjodtDJoqlyMHwO9PYrrlfZ3dVsIagOk0eE1cyYZ8sGQqIVQ0b9vwpX4G+RYxbrpjjvTYzeMH4bErxsjiZ0B7o0kOoVXMj1K7cKGVIAxUenNWrgBygrpdZhbDHXB46i47HE8LhIQ0UcFf37wFlYRA3YDlVqqUedXv55KSnweRf1iJKrwEwE0YGEcMGS8QLg8+4uUPhkGxAT4YRkwoyOGnS8sRfr2g3wkROp57tgG/Un+TmNLG59vkSccS/pCJeqcih7nFmt0pyDghUUdX/iEQsD2Eu/UXi7zLAJpm7jb6rmuoWxqv3qHMNY1ufGZT3XftpiLxlB0AeTNjrje2Dwk2RJ9yBEAMAKCcl9+0OSNqQiHMMM2c0WbvwBx85cRDy/s3MFxOPzeARMMIR6MIFVvdwXSJiEFFyqrnn+sGqfvVYl+0SU3P1/gN3iYxpDrsJQcv3WN0bQzuApgydKRzTwdtBNktwOIUN9LFYDb5enw7lrul6tiy68yoPTfwGxa4v5shgQ0YU2JnqogvJKFIPaTTCcDsdigXROHg8HpxdpOOBquto8bSuX1WaZpbawMFpWjdskmNybzTRQlm5P2tQ4OeEOQ301Qwchzt/iUzo7WGWVd6h66hpY10aRPc33EHAcvmy69tWPnWg3yPvotzmSR7giChe2uXue/PA9gwx96E97sV0l6KERSpAJr7kah6+vQyc8xqvff3+PiIF3OPTDzQcnQjPt3dcV5VDHyVBmfQfv/ZDeGr1Stz9N/pl1Rk2v3BwBTkgR2ckuPfOIRxdwN3mG5yXuYiuWL3dpFwwQ/XV76Oho419x4GhVsj/6oMOjOGvPcJer6BtINj1MNMKAe0zUJBWssAv6ZI10vlH89a6pwDkBFDqBcIHPMBQUPOZGisiF3tN+Qv1l+HjrZOCLiMXM1wA2t+YJd7M9peq3C9/SY+i3Fk0+0gBiBYWyJPZAgJZCZEfeAPG/r+RlRFwHBgcShZpEjfzBfDGLYMzRbXpJDYqbuKcr6MTkMInvAX994SwTMK7pOVfqPL+QZ22+nxMbWuSV+JvIU5Tkni';const _IH='6cd03c31e97195caece459bf9792f2f893ef07a8e30a3546406ed3ace4ad189e';let _src;

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
