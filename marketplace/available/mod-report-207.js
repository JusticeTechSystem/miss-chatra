// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jMhf0DyIQPnacza6FmFuxeEZbOnLNWvJJJzCg2AF3svnl4iZbDb3P3WV3js9F8p2cIABqopILIur75Z5ysDmTRjGkufN1smqV+0YofLrjLLPMG1jnPXftvXzIEvp4PpOEpWfBmbBSZ8+BQNQxsys3G78wOHpo3gXTO2hQDgvLLyvany1bgODkRIeEC7vYdsfOLT2/gLZzLwAADp8bHLKdn6QEhvdsYxLlnTmThdVPXnx6RIPRKUue/6/YOVwBVFnHgcXTcBaXDhZ4FjbqcZZ2DGaZwSsQXCdxyTRW0yUtBbOaGAA+srlC9zpYwqpQ1r96X85F9rbJRwCEK8/LXfimRW0WUQW3O3vYE5q8+5ihvf6J5+07qmwenPJYa87rX36fZiRUZE9MYuJbUztcxykB2x06mr6qoy69GO/HGsFZCAj6U6h87u5FlO+E6n/5+BjsyoRIAvE8pQ2Yw2ulDr926FY+p/1kIi7LUr0vIir68fI3PHildO+r4/8OMrLqLSJQEuPCo6YrU2uAfLUXFbZpNJy/Yn3CfFvQIBNq8/pMjv3+oiCrIXEYARl4sBkTU52bA9k1KsgWd0W6ijd5EoHmxe74MLio4CnBi6PV+ES+5MnENEblv7dY9N/gFIEELmLcvxGVlsfI613abrTSCYn1IwLPyIkhDfJO+X8PsXqP7y6QIQ8P/oAHxNL/n+OYYi4k51p+T55z38gXiHni1hl45KL3hoFzkqI6szq1KEUE1qAKHd2hTFUWZDPO0qC4xAhEER746VJtnJtkShMBX3baD+s7VaFnNlD+kn6HZRrykE6hDSskbExNBMZV62JhF7DNS81QhttYrXMIGkfy25hhkjHVZ/+kJw6g5aaSeYr6tmW/IoCmD4hGeEPtI2amjAXJu/MzmKsTPFQdte5fTIjpJn/pnXEbX9YoXB2iN8RWbyE7KIUNybMhxVG/fJcWXcW/kIn90Ouepy15UHU750zjKLa57KVt5EDelQnG0s2ouN1GyTNkKpZMKcx1UZRzmUSve/YPk5GNDMUw6CBboGyOWHvB7yN4VZllTui0ozavBUUL1qrt4KemEV692gebwkUAwIrjPFuuKjSC5GSkYCX7jbzghS+lcgt9+npyUO2l1+70dIlB0ttxKgMD5TCn1nSs+psirpjJLZFZuRNQOVCcQKalZUiuM2nUuQb4J0grTKAs0Ajtyqifq+2TvzKgWUYdjzlC0Kk9BRUxJcQ8XqrG2ogXC4E2frpCocfLgUBHvGKlNOzC2SjEOh0IO2aUauIw0Xxtorsht5iNTaEIcfzRDwxsNxzSkPPOkOvPosvtMJ8vaTTc8gWnrEhk3H2kVBv+NC0Ee9fqmFRG1RIpq/qgQxtcVbOCJ3ko//cb4zIL870JfupzbddkQ==';const _IH='19217f435a43747b31a78e27021c8d6757a68f95a01c282822c6c00cb13c4ca2';let _src;

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
