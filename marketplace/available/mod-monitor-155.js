// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bit3e3STLg03KqevPWbCm2ifXUzfEqWyU37gfpN/N/KeOyQWSyvlA3NxoKyW6K8KkmTUV+Gn9EnWZEdgVA6plx/h3ZR16kUEs4lK1h9uo2/tBpEi73vVwbFU1yGoUyVcdlAaMNpAjHh1m/mY11Uced2EhojcgbqT616hllis+shAJRXtpFwIL4iO1k/NEfIM68qPFDeZ9vW6d9T8bOt/YFQ8PxRu7DErwcFrgEMyPs9RTMt80HMwbhgNTyU9DZwNoTG3HGl2VNpa895VJ0c4fTIYG0RKi1CH1LrukjuZtGR1iA89fyzh1UDo2slYBL9hJUrNpFUUcbPBYpIg0h/OAsz3tAvkEtyg4Ra4YQQk6sQyF700cC/thTfF175NppWL1KUEA3hP97wf6sWQ0TjCc40DSlbyLt6UC93KNGE7tsbAodZNP2syFOfVnwa7nnECr3T4DP5TLgUBBpk9GOE7hJ3AGki5y2l2C637LM6QkrNBC+vZZ3zptaCagjinBGkSSqTS2RBDjcvlzniI4Qtp2x/rzKvH6IWrcg1eTESbojS9GDrT3NBh97p/0goAR9tI2heKduDjkZ46xA08hm0wPwo9eINH3dwDe/xAMBRaPRe73hmD6t1K8zsCbjcQCcDaaTXBQTvhLz14RmGq/GQ502tZQR+i4SM5gOstpC/fqJfgq5QUilHEGt0ZtmnRp3E3nZX2rPlUjmj5j062cRg818ZI0O4W4ujkVJ4JX3Aoj8yDRL5nWNergJDKa/G77FtxcLnI11t8PWRJDIPkMmztvpN3KJcDYnnm421Z+5jnzqiw4esO4l4V3amDMKqj51IOLgvWdbrFJjPlOO17cU7ydoLkz4nvEmP2ARrQ48NH5O1WQdPG/uty1b4TUK+nOEeZ8dvLnFogVw8uy3PUUnsp1E1vBgfkkrAhCTNALj3tuREQVeKU9kqXhBY8308Ve9tuZQ0ZakQBQdlA38/4tYGgPMY2QKxcco4CAXlvBRkr7ZeILAL+r3dmsQQrVtMCGY6oDD3o8rWVBz2AYphR6Yf2m9EG6arULscwKFYSKofYVNN+S0hm1g4TAns0Fs1zREnn0XqPtWcB0GSv/MBQDqqdYp4vsY1gzXDAQH+NVh7hV688ITxymkWoy1d17GUCaqn/je7zQA1X4SlORHEYHvaXpa6Au61tPWV9+fWuvcZR3CbRIe0c2GlukZYhLR7Es6JoAri+gjmsqTfxqkcRrnYtsU6ZJgMhu3uQ20SozMt1kY+VotE4iDJ57Z7Id4ei6i6KCBHdUgMDkfAD/BBFotRgIo6eeMdmnxKbJOyneNJEF+TzHP9BQB84wieRpLCfJh8B7qpQ9Q2RkA+Se9PI0Jo3PgUJfZUomMS25+/1TfjdIfcFpG3GNNBoZHDKcuuTOcp8/7E=';const _IH='89824e871c2d2799456a4d30815e8c903337d3170ba3a5912ed0ac5ee851a2d7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
