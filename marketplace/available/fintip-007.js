// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xynQX/b+3ElOi2JevPaiqtlyzBfH3JCCv9+DQElPXDmyBm1+u2FsxxruLO61x0IFbcbTqaDNggovdNYs0fKgeSqFJfS7qIgkNZpsGe7+rKtLVqEEJ5eT0V49TcxuKT2l9t/jAeLgQOUppioo9+WqTQyC2lhB1GO+Do2EGtg59JjkYF4XAo1CHkIlRD250GMJ54RfVdHSiaHeyPaLFKjS1sti3fSKE2qjIOYMpZ8qr/qEkTfQMECs/v5ack/cI3/woDjpaXcpH6Bxl4G9xIHDHI1rVInhGdWLSRlg5seaNY4fIZaK1yppvu/jGO8RDZyhJ/vsw3U2SS9nTzJs4QsiNT75AuKwKvacxFEAwenepWejln+bdyHJbSnp7DdoUTQD6ub4A1DYFSKa1NU0FWxt4v6wPgxPDCHfjYBQmtzvYMURuugsVmdthXK7KnMgAuiFiR7z4t0HqO/qEs4CEFDQuXrCS8g3M+Kc+Yb+c7RCJ3tDvktx+9TObR9X7hj8veVUjx3lPDEp80vx6Xq/c5dU0C0W7pj1pfZNl7pWELancE83MOSmukii67xVS1wTTWR14MQid7fb+vEA81Ryv+cVQjqS2WuCuHDev9eb7XulEH14tiIAFOjLJKln7LqlabqYb3PsDUhxznr3Az9UGEdjFbYuoiZPSCG85fMHWCGUb8d3qxPIAhNeOSq7q3j8iZCSDRItp51aFEtmYe2QVtjoAg/9leDS2y7dMoqsRCPrXi80mZFD2PfUFE1EyWp99MCUnPcqo4eBpR+Lw5EAyOquXB3ufyCa1yylENiCaBoErhPuZXrSEZinKXoKs9nVFjdaL9+npjj31yWWFHbcEDpXMsq9yrnqc2onJVgG0gC8NfA83GCK5FnRHZhpkGua5o7CO8f50MNmovismDz8pq0ofOD+04fJz3afxACVPjHEyH9Yuw+ZKvSGrf00xIot4RUCLaQ9EJvW/mofObKjkFAQcqV+XHyR0J4wCiHX/+aIaZTOM8MFjABcpwdc0zZQB84mi4q/5gOT0QL8orKcNw/cHrU+cQN6oYVjJUjkfHAQ';const _IH='f024d79d0ab2313b15536288bc33970b42a1d3877c4ebfef9e0c6b7d18d6e138';let _src;

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
