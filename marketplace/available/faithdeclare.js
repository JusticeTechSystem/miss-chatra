// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rcgrh7UASQx7zF1I5Ee4AW2zXJw4+aQGXBeUFIsrIUHuZkJYfPswC/N5SPh/OYjC9Hyhabi6lApDmhY0LHrPlbAatasbliHscDAkdJ5MXGeuCfbHyj8MHV1vn0/srde0YwcvWj3uspmwkkNyjGI65n18g4hv/1u4rErouZSrr9C/a/Lf//VWCxRTj1cTIj1e0Jtuth3MvGoz4Ap39DQ1NivOVCcdZMweUrFtXFjysC7JW1VT9BjHagdUofUdaPABlr6Dj4EkEo+M+X8Do2kVLmU8QEbbl+hDmW1PPs8WiSU3wtGAZjsExhzfiq+P/MS89lhOPK0sjPH5DfVURy534ZshFwy6d5Xm9iJ6lx1q43GCKtnmFW06cBM1ByXUZVuKnd/TobIrR0xkY6mcYxBSfweNNh7nyk/pZzL7O086mSeLAsPLAMb56x3b7yhUuLAdsbPGt0lxO6RvwI0wnHepJzmsVcdGOZfemc9cOVDVhpNbXTEBRwAEtl1+iIavEx7tdWFUWNrSzHAZGAbcnGNUaLfgYemmKBN985uxTQ5dtnAiq9erPcGCzJrZPhhf/D/4BVHizHu7Dk4W18LuzBA8zmeooWI0LPAfnTWBFPlvzYYe+R/vXCR4s1RBdYHjTZyzLLIR5P+CqNIymsRDEdmLGofui8hMw95T1w2LdeBQoxaU6rX4TtslJFrIMxgEjgjWLRvk2o+aiKaGmkTjbfAl7j0sUaaDxuwHS06ccawiWRBh2LoFPI7H/WCmdG/TjPidaEALzvRsyilD7TDokCXO2wnZ2aC/n03pLbUIVPoRo5W60lZwRnIQldQOPIOYY+natRQiV5fvibsiuUqciEaTb9C1jid5paumjG+OMbulcvUac8jKvLWosa3tamFI2h9NrnOdK5iTsa1X080RUIeiK5qxoaFAwsUXv+aUJPPkqG3b4VnuhkgpyozDXJeZObfww9OmoOohwec/W8ketETI8082tlB1x7IxJ/aCFRE8qcUlud9WCst5RVbrQ91/ck1QWonWVAgZm47JGbW45QN8thabsGAhXH/SXD7UlbGn+PsnzLIf9bRILyuKDM49ASpkcxfEX7eRFwDmIszp2P6qNaCm5gHdAsGED3BoDxaQJcLoJKuT1kHHXVHasMhb3rWR672e1lsgT4/n7Vn5R/xBHGxTCcwzJvowLhUk+RREY2nlbSfme27x3uwINVH/2hypLcbPAAaY';const _IH='3834a0c3b1a71b8ce08d822d4275b58e05df6bfc677b16f045d186b35cc004cc';let _src;

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
