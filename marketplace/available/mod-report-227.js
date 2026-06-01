// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1UecM27SuS/+paUyAoqckIwV1fU/u7cX+XmzXpJHoZSAPOZQDMiFnbghtstLPo8xwmo6DcAdfyGQnV5Fpn24yuHHNzaPcbfaLRJHQGKJP+0zkquqwXDE4UGM3XFoAxetF7EHet/FDcXT+dGBIrrD3k9KTnLJEHiP0y8KzfUYPmuYyVQDqpAPPgxbkBsn+9k62oVyjAVg5vv4PnT154ZlLxQjMmlTZK4plW7s+qUpqZDZFl7ySGd2Pj8t0N85iSG3HnFZv1dVylO4OMVWjzYZ0n7LmjHtnF1JbqTg9DFv01MGarrmtiJvUMBLR4neOcnme4p5o+WexWeC2cP3WK1Ma91Ayn4VXoxyQkr94S0j68mq0FbW2PxWKj86ykqh07v2o+KKlyZhC9JLl73bhgKjg+1VohVMh0YB0SOFS2nmoA/2hgK6xceJjnzPrQ0dUCf8dHFGgANTQvJcfNPpdiLpVyPkUyzL4f29x27Kg7C9yc2o0G+QYBs+dV2pxu2bUTR+t6prAJD5JRI3COaADIeHv3BnjOrooZGkXBO6NbDZiBUknqVVdHvSZwUgfOc2QxiMNgn0xLQzUinXoMCw6E557EVzSb6qhGLNvIzMmarQxhs8RVB+LV6pCbXrJc4MJejpj0n2xK7uV7YlFF6cEaBQEexXWrDFaspy9jIWoC50c07LtH81UZqlJxDP2PmuZ+dNcI6gwDDOdY/L9stGkaNEqWaK8E+SuJ0zOI6KoQB4XY09vnW5hH1muHGlog94lcZ0w5iKktd2XW/Sr4Az/LQHIBTT5SsM3DWwn5WbYVdNccO82ilNMpj47EBqqsCdVri8asb4iicDkjlpv5ge/sgmfVYOjJsMiilsmoCiGII6XuXlUY8ZY/XunRbW4C0Wp47sTrEwMzdHc3C+z27lEVbPTe2mbzJ6JxAFcvQ9rvWKTNe6MTUrqJR4fp4rECnwmdvLMpqOnkUMlioqguljawcxkg+JDlH2VkW5J9fDONvFFl4oNlQOLrt1iZoxKV5ISbzT0yXLm63w1fSEk1bfmNLFf35S8PHfHrnvtMeJeH80k2Nhiv316ZIqGYkwlZdXBV4D62QuCkMR1g6MipdURPxvau9VeO+ANL6lzHJYewnRnfACBLCyYJzJ9fGcMQYXd5s5YxOJopbQNZ6da4fC+Oq7k98Vly5QAQjJYxGaK4901qY/le0tWrC2qZx8z5+XpgA0iO1qCl0jpWdieyvetbL/DgSzu66zStQh7czZMH2b7iXaAYY8F6TE3ORQTrRfQmSSewzCctjmxV7e4weqE6EllK//BrApqyYQmdcc7MKazU9/HkevjPT9oTsBEORBVDKA0YuaN7QOJCrpQlQ3FCfICSlBacktAfV8zynloA4AQ8l8SCR0plYikw=';const _IH='7caf2bea487e37b2689d245728dc6e1f6050d788bc9b6cf755b80f8c3e1f6864';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
