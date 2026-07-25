// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSebeESu9mC6lgSgRKBkNSNVqhDubG7D4gn/8ycye0DJzg/us2xhTUUF/VTnjVJR+GaBOvDk+PHwHgRJ83t55knZ1/vjw8i/FWUYbamPwBWx+/w88A9hvyOe/N6O8+oHugIaqDQL9RuU8mWEdI5ytqpR5SmydffK0tfr+JVoDCCy13mW9Q4jzpL137FyrWbi5wkBfqPWm8OjlDRAmpOi5ezKdegsdhJEo/Ws5E2N53VxcOpx44ha8GjH0BeirpfWX1eKRZoAXZlaIC/tjjZZBg6TGYb22oxrodtXYO+/ytg5i8H2wzQdRquVXhvnF9romcflcNpa+ZV8IBQX+CToqnDj/w5RhaBn5wE7Gc+ftPRyK8Pllt7cRSA31VKk9HjyFKtdZ9MjJbrX3tNfk9CqcfK0ooGkvSFArPU7svUHkiK8Kj2u6ez4Rf3SPl07NnFFWcYueaAGtj8QlsLac6HtH5XQsEQFEwJXvhQbXwkH7aJm+10RZMojEcOgcQ+Z9HAQ7aIizPYy/UO2aTQN/lqkXc5e1Ygasz0CYr4oLL+F/k9isrwa5ty99KE6ovLz7oTYLOVGAxWaH/Eeg3Xd3kqMcM/AHfiWchsQagmYxlnzWzGh1Q2B1yi9RBvJH3XqHlJ3Yg4Q/Q7pFyWBsdyEkqPIbXNxQjMGQyeZr/BqRP6/J2cKLK2th/fWYWAtr+74eZZ6yNn5W0+Gvxhhnl+ngiVMFBW2Vl2Td+aFZMkZXFTxy4ThCpTj4isC/gfyTfH9BK1Uud3oRya1LfW4/r2J8VoAYCv3se5rQi2Y6h/jN+IqfWG3XqiI+e4BfH7uN5e7iCJfIcbHBBUvqdDqgTJPkjy2Cfs+eIbZnm3W1cRsY+SKGLA9doZh+APgmd1OAPSrH2/xIBz+peS2i8EN3VsymnYkZ0jjCn6uIDXyWfn/OXlKsyAIvlPRWfWKvOZ+2I0WTzOJnUJVqATMvtWb2ItICfpSK/oXH11z4l7nQNhvkLdXSxeJ30wjE3jWShImMeaWvgtohX0P+rS9OV4O1e1fmO5YhgTT/E4jLmMFWVH7PPn/1IPIfqu0f3jclGxwD0EQ0Fww/aW3BIXGrcboqns1eCO1CZoJ+79RMQo7v93Surh8R5P5n41s+aVTWHA8pAPR1WD88daxpyxSTxrx+9gkgtbn/TVrHX/in7iN/W+xdgaFqAZfTZFQ+XnNfEVGBBe5hqap/koJuvcmlH3iQGLdQ6ZpIU+DR+W13FsY59cNcAwh5cy8D689XJqotUn9Or0eH2c1uvWN4wO9i+rEFljndTM9ySZ9z0v6xaLefMpqbNhEmSKLtGrXF5L4tEoWNsO2juCUfInsU9r6QOllybT6LjF0kS7HvSeFT5rF60s';const _IH='0b9ecd7a36349d3205dad8d1887f0e89a57c7ff006242a00bbe87c6d4f4b72f0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
