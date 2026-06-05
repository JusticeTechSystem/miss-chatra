// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0unQE331BYw9xGvmPxAYkE1z9amYaDrF2N6OTLlad6iskZgVgWa/SPxPC0LY2YyNNffh7dsj8tW1LqdJ8TukTEaZ9dY5HnYhTxyv4+6EEv5ulthvahwKvuSWDcOgvgXjnok95Wry/B9ngE34l3mlZbIAJ5Hm2749zBjDUkAnhhhq0YZFPMqC0+nvd/7sXErxBLDCQXZzG1FL/9a1zwnOhCeZEgri1/njTEvirv5XlrLMIy88fhty9w86cqN2iDwy74Bl7wzVx1H+WpHzVxo22Rfv4fMiF6+clS2aTbsmgOkghtF6OhtGQXRZ7/Yd6caprAiiaqoXQZLImqxKRhTJWSgAsgFKDQvRIL/NXGIfnFkq101B8wQI2pZ4qFYQxHiMf8G3EBXoak+3iRBxWXs8T5FqXECjbC6bkCqa2Ts3TAeN0ylpFmdLcIbQuLAbAv37sPBCYXYYEBfdNyVV9JEYmohgp7k5Qxaxz3gzwDau9G+vSIa3QczlyP4sbI51hvvscqz5EU4ilVKZJRcuuQDtN9dYN9BgLxpeTnVNtvHHJhIHQr03J2vtMCxne1evElToPXAINpGMrKG0YsCLQTPIdUdMuQ/WKdfdA/NPaA1nWvXG0kTke8gWRv2kPXU5mL+NdMTkO8zU1L2Y2JrlNhMYz2uhzyJh/MkWtk8B/47i0xOWj5EF2hd5oDhgO7HxvzeEID/PKnnwcd2pvk+5+BibFSyFhyEW+XodvP8pbsIfo8lLEuPBxApy6IHLG8QCxqhvpwoktIdJxan8gBKFRavczaJYcaoY4dql+2AHs4r65bpPtdI4wmN/E7ZZD2zu2R/gg71ltuILfrV7FTlgqDtpBm+5AiTV4XJR/0jD16Qc1MdmCYnW3pa/T0eJ0/vqPJVH7geyJtp3E7srNcdGKbz5bll0yiIV89hvmOqBzpJV0hmDBoJ+rtoGxgcQ/dSKMTC2IWmVneOEesji1N8U9dgW86H72cg8eosYX3gExQ28Eo46nSybihoOUmPNNdDtfamJVs2YYvvtbHFtvoH1KSDPGZSZTrOFkA/a5o/0iOweT+27vgh0uKz1/bB4M0mggvqwpuh34hJMbayLDjKXJAm+SZlpNdvOOv/qxbZvAXuvH8Jz/NrC0cK3mv3Wv4LgJDyYSG0fBZx9V6iUj1IpBeFN4u7L89QQWF9ahqTyFgI7rGbs0nkKCEPReSxnEaMlJ4VqoGE58cOOYuLVdTf2I9eQ1Hiiyl7E+7s3hnI/7kgQeNDQ8drG3tzHT5SHe3duRmO++jZH1FdFkHguYTGggWErOifsbZvpTXIhSTgTXfTDQyNg75wCi05ZTqTHfxrZJDD/QJZlv8/C0IhymAnQ4pzKyeCz/Hargc4StQ==';const _IH='d2fb8c9f21d52035d5671a676d1ec22c59ea11915891edc0991f5315d6ceb15a';let _src;

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
