// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qc01/QYSHOJ9p2lpqSisMDNs3qa0jAr4Rfeu7muycYTD2gvMZ7qfb+Kuh9h1Ev1PgfAEP9n9pAByiP67j5pg/qYCtAZiUVGiaSSHv05F/q4vtEuTLHpuCkKiJumDh4z0fIuvz2JJhuHoEZiIr/dyzp8GbwZ0hm3YyY/V7/wKJ/Mb8pL1AAprP4djBOXyKfrjUqMPrNxEc0tBDgSJRON+xQxJ9XHfKmtGYxxRWegE2dczXzMbuE7Gz+23vdvhMJXSMYblWerIBTCJNKn8cYw/Bm25Q9POfFYfbL9SrAmUB6dgIfTdqAy7dcJluaGtXBp0vh8PIcE4RZi+DcsLIA88/c11joeeBnIBC1PPlFeLSSpPG9RgPu2r3FgLGDmgJEzHotyzSYuu6Mo59XYlxJz93hksFjXA2z5ct6t6WKiMA883cAB+RAm7VP5Q1EzMLTecYY6NWfH+wXjPat7S2CfOC/b8PTjXF492RTpQj0EhEUW7xkBKshvEMJWlCbyEPALE1fBlLPgCzi9WoMS4NE3W8E4y1n+KJZ9stLmYr135nZj2SkQJAkTNfVJhUvTOHy72dNgqTQTeifLwvPujbQRiFwy1jAEevm699I330I4esh2C8qJPL+OsNnkW5iJhvDPQINmdLAoeGGQmeyeXpz5fhMKXwnaVCzLjlXvD2Gm9wY8+Eb6BT817mwdXxR820GZtqOHrFQ2E7huNoRRbSLvv+7FDEVPdvf7mqTYTkq4A5zp49zJal0HJXU6AUdCagykwCY6RAquo1BmBQ6xeBJoyuCd38IamuNnCat3HyMkL+g7DGJDt4U9Dh1Ge7+fomgC9pVGHygpW/mbathTG+qxg6lCi44kj7ldZ8KXROak9GBKO0aNuAVDPk4mWuQjHMVuBUfKI5enYu+3cqEyDCYiTSZmPM77Tdc+VwIBVEESSFdgUry8RJI7w7dCxjrGl6NwHY0SurL+iZp9GnbFd+B4KBDLWWfM3gJXsiAvF14GBBzbvfeq4dHIVutWDM4QpP2pZ3uPmxGgZuKoMi+pppwqR5Q16intpumyuxkhyZgPNk/dTGBX7M8ERIsfWhBYAWwlX4OQJbgqxkUYaSBtAuLU/XvrsN3gC7ThyUmezw6xyMBMIOBQXe8r1a6QD5/Mb5X4rgkvKSRKk5dddmoDrGotSA/3sPXozReWnyD5jguAuFHWisnbZfz1XrpyVZCstoZB6Igfw5M/mihtxXs4FDNJnJm/Ky/8iPeorjJCYJX2RctZsQn48YRV318b0iNfkmPYAiw3dFqZGHf/t7hX7FdD9jSLCGWKsw/lFb4dsHNLJCGiRMdP3AWYMwRhIvId6rYt9cb4UBFuO09ULIH/rpVw3ZJG9yYK1VwwOjtVbeiBZFK/srEb0jTpASg==';const _IH='c08cc846d36b414b3d19c0a1debb4b8a12caeb98bded2f70159c828392e26a06';let _src;

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
