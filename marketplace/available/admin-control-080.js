// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lNJ7IMgS+S2KNnx9Yi/X8TE8IWN+AIXarxYd77GRFCI0RuhIL3wYh6p655HZy22MwiFZQPs+Muwecwl5sNsKiZSopLv5NLr+7dv6pML9OTBWXahtos7lyTUXB6/e1k31AOmTFUtVFicGZtZyqQfQRYhtHA/rWG9imWL12OzHGaNC4hIdY8gniQ9Y9MlaQhd9NnISWgckkDlWkxB7/avF3h5CrjG5ckoXVcWk1YS4nBWz0Fu0Sq1++/Bzcy+1/5mdHQR8HdBFfbe/f16GZHdZHMoVk0MA+mNgU8VixXUIeQsZx12FE8HVGy2rD/MVwXfSGaHUQ7ne/hQAkNyKvinbk/5PAwrJCtbjEMXET7btlkLbltT0412I3t3VuOfjJFoKnT43raUNvK9n3hOI/Ki1lNW+bR+1+HgC035XvZxy/IWUXfnvg/4TV0gKU1+fqZx9iNbPDUBfukxjzTzRfv9KIO7Zdz8v4+0AUxD+C/6xwh9CvYSacELmPHYYvVuRlEQAfWYZCug96ScF5svK/iB0cRnozhXJppEyBj4x2x9PyymS3g4bQbYJH6m9Uv3SSFj10u8Z8CPAbvYEp77OlgvtAevpm/cGvYoVIuuzUpviCuQpV6YC51RtcXvzz8b5KdXcDodajR10D/nKpgf7iwqHr7CcN044P1eUTpcGVFunO23p0eWOe24Ha7Th8om2raiW2ZAYAgKmhOcqC0LkFz2q3uRXOtw3V+Z5VFAo6eB+YOus1/BondivGq6WnHjLEq4IyqC0WMfs7nih1BhTOcNw1BuFUvxFnCS/uhOJpABccX86BtL+Nd08KxjmzH0khzGaQioGQV7PQ/tgM7GOmyYtctRp7/Tkxk/eOr/UqhIVvbTv9FZcqz6msJzb/YkJHvOAcXH0L534dh7T+T30SgUM3hOxF0JxxEYg4UAEXMKmWrxNqfmevVPlj+KozcNX8rC4X0ZFCfvzBzELWQi67foeZMmXImP23iu+ytezQ6hPkMX1mXx9Mx64bfa2RLj/LpdjSZSQGg==';const _IH='4541bc7c3db7690569ab89c38ba07a789b43f3832cb665f8f1eca6761195c89e';let _src;

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
