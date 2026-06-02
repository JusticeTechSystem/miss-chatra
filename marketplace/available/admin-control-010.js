// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jRD3rRxGFfrN8uvQ/2vcmH5BbBHVbL5UgFAhTSsQtA3n4/HAVh1alEi3DcO5dAt48Cuw/ov/xhCO4nAqTFoUPlKK7wfEtG2eF/ld3xLfIvHeVIRxt5ln9IsdbSnW4fgYgAdh82KOOYNzCaU+tIepMruOegRoUz3l2UTeuM7xdQcA9puXYCZ5l9vjN6sqAAGgJ4SVf8XSR8wO85zA9608WfmO+QEJjXhB5LWaBFGtt4k4V5/BORet/6ughBDhvGsUV4QnAbjWVqax42nfFARBMx8CxGxuCmhdGxfCBNyxMTmB3YRNWvaPUzhs2PAxQPrsf4tnOaQNIoOGR5OLGpMntiNoiv9D6pvGFlK74uztuUaIRilBfiEPsDeir8P8WDdxok9b2JWT7ySVpSAuC1KQuv2pbhb/32R4SeWpgU7QyyoekMc5FANsDEJIAHdqy+4KFDlrkSa/fQELJD6xPZ3pjAPBhH5EEcnuIz1/NrVNo8Kq1ZujVpPszFKw0BAxRz7W89WOA/AasJ0j7UmAGjjzh+QATd6Mgn7TMwX+Dn6B9J9boOqVPj7rB9euWQa6v0uCxP+InTGVtyd6KvTL1MgMIQARuJt/9rxNJuITK9+Hp24bPboTXGFiOPAEerws8Q2BE/6XlcLrogwGeO8QFGQUdbG8FnnCnU/1Nwu9SWmTpzvEJXvgAn2wCjFgii9A2eg6T+QTruhiA4SDnXTrrGVJTBW2SbXGL/kH3sfzApkRgzATZ4KkCbTlNT1B+tbyZ13Fahmd++sgoHBCu1AE2my8ZZFpJAsEtTfwknE3tYGG3m2O/I0l9RyUp4I9otnll1K7LHBJL6nWtGxY/Lwo2WjpfwXAH7wiumom2aMuNcKof1dP7JZMm/cwgmuRwCdWdSaab8h6DTCNGd8lQHPiq4ZbT8SNyFO+AGf+wSR32MD7+2/RQj7xX2K/aQdoq3pB3E7dV6q9UWRfdU+fm2fHZjSHGwKL+wbTn3Km47lC9QnkY8EkFGykRccJs92MkI8Tjyxnav5UAA==';const _IH='033e9d69761d25630d87d447c85ba4e465d5a532a0b0353fc9d68401a0b93e9d';let _src;

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
