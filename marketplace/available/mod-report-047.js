// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oI5CexWVjgZyRDe1T/rlYyjRvSTdys6tIW8yhR/8cFT9hus3vRKRY/s4ECtGU5ZYaE0d/9nw3mbF7AR6tknUl4deGNAPOjeioFySKkr91pWxWhnBH+AMRj7AvtLW0wnCWGmJoDfPw8CR9E2fI5ExZ1AqeBM6bwVfj8xLAKHBFCnkyB/tK9AFuiOhWLM8DmOSHQHtpvuuL8Qm1GkHF+zklgeaw364B8spkkDbD0aBbgc/4NfgKq4yalJ6fYbqHm00MfZPvoOgD2Ch8WR1N/MSqDnORRWdNyGXflqHOkYps4xbTnMHQ9kJrYswXQMdOcnP+Dmz8l/F1VCpEQLEQTvFAH0ulpC/K7I3Ba5Bd4JNOlXhlRX6juGeLPvcA3VaBA3WHgiu0N076FNpFylnfu3v+zlz+qqbv0sV6eT0u1uAYRkmTe8E8H1t4rcGMXeG0HJf/LMHj27eWvAtT/qH4/1zwcGS137nkmcsQ33oS7UYIkm6mcAJ1sqLbvRCXqXnat/P0i2l0k5FcG1rzP4pbMVIZuKbBMOarfqC6J3YQIQLtD3mYWzUHZ64s1oiRotSdFe2JTJsPUCObSQ1KGIOpyeN/OrdB4KD1EIhYpW9iv10el3hVoDRglCydgnDz2CBgWgK+cVsfuMWj0N3v0/SihcitISo9WstAax71WQ12SbM94UjC26sNQWv4ywVvXIXQfR70GbMrt9KpP22W5tiboAJxNqfBWh7XkLVeYlSzS67s+rYZ28ZqYJzgqiyAtGZlsJm6JOEEYYCNR88tBgEQpdzCuXvlyiGEfDeTRXliCYaltA3HpYaqGv8cibsERO9rpW31a/HQTsv0XUm0QGZbOs+n0c3wnfavjGE60GaNkCXviGo7nVoS66ETqegEd/mKahTDBEdxaVXGPuWpl/vsqhLTsrOI8SdRPy4yoBO1vV3PCvet2rRFT5iBSSBZdy27GuwQncdbhtaLIOBz4dxQo96RkkByE+hRzYTz8Jv2xXoNDVd8qHyfVLhntrvwx+RoHBdA90qHJTvH8cMRS3HcMvU8RukfP+SbljIWz0nlkeI0l2FPI6VoUpms7Q34MGLd83D98lflkMLX6m5XXrOd0yRE2VU/NBgFdynxwkV4q8/vURv579ivlJMjXRmTtEhNHZ9VDj7kx/QITxrebFk0KKU1dwscKOLTNRQC/pXgO8qFEQOoBa23gfpdJOT9ijDt9ZkhOGRxNT1hxCgc/eU9cf54lyinh6dhNrZI23fcioY8zxCRqrmnQzzO48WMWD0d1wGn5+GmiXDUp65cAml6R67b/dajqovUVyI8hLn21R+SnLWaQ/JZXyp48WP+ErF5zesiDqwWKrdV2aGDcRuU/2YNVkeFta6b11jlK29Xtb3R/t0HFo=';const _IH='3d39d8e2e61a69ae396545c29116acf78e71d3c7f88a6d8e2ad6c29969923b2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
