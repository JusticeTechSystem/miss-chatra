// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LePkuISekeNMEj5H8pij0rOddpmysUwe3d/IpbB2vz+jB7DH+ipZgG82oznaPA6jwXOVyyILzS5COzciGAzV0m7jozKcgoTa3EzQBw4SN+T6cAljSJF4hDexQpr5OJpEx5PvlR7bK2IFsHVcGbRl6mh9klfMZscF+a5IWbzew3sbuMCmhC590NcAfc1DBXmaSsn0tdgBMjnHGc4n8BxnavItZ8WVICeUyPDxjt54XniE0AALnS8EhwJRNxCCHcMAj1zutorM+nT7eWLvtPdO07AsbERtLHDAyg+/qW1YTsXtgqAo9NwYcMN4HESvs1oLLZg6nUMHpcMByaE/5ESHWILU2Tg6b8YsjwKQs/ELBcMZ6R6jtu83WLoJjWuW4MNyoSJyVUeDZxZlith2dP5YOxWzVaOUpsbIaY6p5TH+nM9fJXlVa+/LkgQpK6kKmYuIJ9OK5X4T9guB/xRXO+CikNZiIFqxnTkgRcgmr9mSfJPgjtLvvPlx67A9plTCwQfQrZjrwLVNY0gsVUZyKvUO221EIU3w0ON/alWAdKltHS9HsQGF/bnqI08lZ8f1YyJ24f+xYCpDcg9ZGR9UxalGoxbTYpNJPqdPAAceSGsbC5EahITahcLthQfqvnxbVk5SRXYbTrQ1EDl8Kp61cV8nAYpGPq4Ixo8lbxAn0HiQHqr3xGNoTm4wikUB3bIMAwvMtuLMMTR5xM47WSNeWo1l1CF8xFoa5wtMyBl7DnVW9ouSI34Pue9La9m0ZM5DSfc3KanNIkEOLvn4P26YRL5gs9RY1606dPq1rV+ae8UvtgZWORzcOtqriuDihYgAs6hVzvYd0OiedXG+epCu1r9Wsfrls2YxFiFnDdzaIfUpt3BMYk/fnVQaFNwXCGHXf0KGgHSd7pCYkZV9WSdtPksyf33wJTD5u81Era2t2R5tt+T2KFEMiQek0iqrD95Mj2QfJX/W2g9W3uJ8ybjd8SUCK+dJatXL14XvR4mJQEqKJ+JLLtbiwIq/P4pMtCUn6UpYAzly3enh6nQu8Hb1UyH3NMslgPV3hDLWU+oToQ3cA+S5begIqdMVYyHqiSIUBT9fvxUTS0Y0tG1Cmm8/IZXQWJMSyrhZ6ItG9Kr6H8MvhtwZNlhHqM83IznqBUYtPo/lpXhFQywkMAPSc82SAm7cIK3nNAmjl6zArDCDKMtlos6vzGKPCxaxgkAbM09ZkKwVLVFR6ZTvb91DLnCHitApc8l+Q0bvAY1EEApLfXwNXrF8o4082v9hYJeldu8QuqaNP/rNBb5KozRuwnINION1Zh6EaUVXYIy7TCTsKk9mu3cjxVj3km4RHv8a2I4LFxhce0JDc+8WtwFgSaWLvtMjOU9b7bJimGLzZg/d84Dn';const _IH='deb8062847cffd74a12421cf743b3910855719fe521867c6ea7b0f07e627618a';let _src;

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
