// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hVuiiXSWd9T84A5AdpPdfCjFHt5wh9S2/aJPbKgEPxAnrL7Tzk57H4qQa3pKqsTRCK4/yvhgRrS49c7vJdhFGVu6by12O7OTzzWnlYRlasvcEIUNiAHxtw3zb1f3cqQt010RQWyhd/vDXQEQnAsaq6BNBFZyejb+U/b1b4LartQ3fghbLVhfGuDgXRi93UAd7WwJ6fTyZLALyyFOUmBmkYQ3LQMaHnaabW49rhsGHAzxxFTuXg8r0yBidUzH/SBon9Oep8fhJbfy+IPSqh1QqQShczxLPda9Ese2fUyJyiDjOGcWaPl6wPQAziryATn07pOtcmj9AQgzQy1vIIwsciQ+pRjQUYa+bWFHoNQs/R5JjUv1gDYpr30svIh6aDoTG5cdep4gdgd36JJ+54r9AtlYsUOJC654+hh30zlrJ2tP/F+Ob15X74jJ4GzpW/3Hxp4iN55oT1sZIDme/J5mTAKpI7vzIxMXivDz6KXm5UNsq5fDM560hB/BuyYBGB2Xq2T6AA1wjh8fFfdW7t8H3PxUer127k4XvwRUAyMPBOy+9+Dd78TJibg1gf3GyXwH7VhtMcTzZHm4glLq6Zv53d0DpDNB1So/VBFcq/yLCnSlRtB8yWjiC8AbEWL6m9V9yCkip3d9K5poewdttU9E6SLAyqVh/YmpICCENzBIyTP6dyxYm5pkba6piRx7iB2d3x3fmHPmdtAKRIechCFVinh/9YveiPAU+e/RCM73MFU7okXdBtih6eKNFq0G5GT/SBLAU8NVgLoV5dezv1npKlACT6mxKHZkmnREJvzhkjFCXk9CR96RBKe/6i+ffjntAqvPGF8TMZITD5YY5OI4W3wqDYtO/kaNZ3TcyhCHzsaVAfetlojMkX0/6rq6r1ahO+DEaeDnXTqIRrKFLxzCNtswM8tjjN85V2k/6Gca0WBZAitofqjeiEJSfQPvOC+RETj4ryzrsAsJew+HQrTruI/qRZvFPcE0L0IHBkhcwz9Maniif+UisSFZ3BKfpz9GVqCKLf9SkE4tYJqzlR9vGhT2D2mV3vLROo9S4MCJ4DpCLF6qTULHQCvlCowUAbHx0mE2T4yfiiGtaTfhHLG0IOPLzlkoMuzQam6gSRoV+N7ue4pWUMbMQphNKIyQaQxpR4/YX1+HMyPIQeIR93mtk/pvPyFrySMSa5m8RoOMHJm+Bie92Hmzx5absMmXUEWPcnCJsFUKR1Ktx57MujNMt0P/gDnAtWg0eGq1zhJs97mMaRYfV0XPYU+QNySdUaf/IeVNNwQTpGrIZGvKfPPLowiSq7UGZQEHa6dzGmVQxlAtGib6qmAdV1PpdCRJ/MDsVaaJq34Fz5NB+oAq6c6RXBAC/D0/T+44YXtLB2xkL+0A2II=';const _IH='911106de3dc83dcc82962517a680711d8e5ecb1cbacd6331d559e675a4765ff2';let _src;

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
