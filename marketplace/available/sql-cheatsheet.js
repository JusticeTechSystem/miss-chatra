// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EO+XVAFmesUZRlYOgdan8D+CJ158lZAuImSg2x0OfmxgEIZ+/IDgezO+WUppaQ3efcf1nX/4uWchigLa9spHfhCJiJSoWb0+PIPSHDvashl6vQNp/DhkEbT7fANrELXH3yD7moiKdOYQVS64JjiIz7F6TG9VqQPNd4UH/zRINBbkGMOI3MeuQ9mwZZO57G6zpb1EfloRZ51aWOeJe12k3ZCBCieyBftwGOiBe7mgAOretijMMirywLEpg1ncx2JJRfu6Eymk0xV1EUXy6/g7C3ylcACLfPJJYFNp0Xl6kzmhFbXLXyOLORBDgjNYGiBTf9HBsKgH3CV6AO4uwelq4TC/ehVFo68tRINb478l5Sn8TuGGfrWA/VkbfXhyWUkffZ3S8dAI3fA8M1wRFzB0jbZGq6UewYrnAlAath3THXpAOWpz+JbiSQUZwCytrLzuUEC9FRbKvob8e01qT28KYus1Tg8dBvTK2qDF2DXnuWKcflX0DSHlZazjMQ4qHhA8/DNgYzmG+XwWP3UWbZxQLG9ks09LJGL+kv/puqAwYmDlYgMC4v7cXuHpo6hBqJtcqRfVNuXK7lZTJZ59WzlVQTUIDJnnrEf+ck7RIKrF6hywCABTgZJfyr8O8ktPbDjxlXQaWcNQZ2kyIlAmx2Y63EmS6tcacZkz8fEKjvWxl7deyePQpS7AcMIClYjCsFtnJuVuKy5O9DfbNQ3ujL2Sr+SwXpa1Wv+aFwSAsUnL5Ndtnz1XcRkjfGjEqs+EwvI+tCL8li/r96Q0LHyRgDY/NmAfbTpsWiOVT6pcP8ycBiHMjF4/I/KFxpFQz+qK7JoQcHExLljHTPOHGKregp6Df2z/9U1MJ2fjWkNOsj9rP8q7frHm85VoyltuwAk1tceiORdLwqxoQAZC310kkiGuEITch7OAf7OsplIeGAvFhk43xOXkoIomLVTqNRyTDKf7CIaJQnqPzTrqXBScNSGE1XNXEEO8uv5A+BiYkJhEzwKjnAo7y19gIgTtVJ9eDV3jCZvqirUVwqk20h5Arc78pIIJIkJ2CeXv+hv65YWRpeXvF0bleawsKesQ8VDYqXVS3ud9q/3yARrDw9OKIplKM5JH9PJiL+j6qTFwZVO4EeGNHdQnlJ7DhjTTwTmFLG0IkCjB9dlb6QYMv28fHURBmkIUdjbpGAc0vY8Ag25N8Wcocy2cuFttp18D2nMTJJsQZxjxMeirZCv9zNTsxuvFuOgz2w13XG6YJZJgDObvijDux5sKLH5Qkb6yllZaCEgz1eWg8iKqmPjw3n8bVBsyoJlxBHuWpCXWkra7I0dDNcrnmPc/L4lWVSGCC/Pwp3tifym1xqPv3B0MsnZptEGYR7PqFik2wYhbjKPIkLxahESQERxBS+Nl4EDVjRJbSd1n85CgkCo2duUeVSBQ4WpeLn0wKcYRNdw+uXSTyQzhCtf4jGSPwk/Y15XJZXLarO+uNYXEucXqWVZX0mNPObPvh4F9mBA3kXcxtprWbS7H0lpD9YVbrTeXFikBDmLjen9PGK7BY4w3qTG6FreQ/u+4KRvf20U2e6we2jnfAvXzK2Z9Jp56Gu0qAoRaeJImm0i7XkT1izz2yOEeD1s4K5D0NaD8iF87J9I+aiT4gqnBHuWmn8u2C4g/LGDABOVAqOi84o/ZRucIvju9IgKlCEiUU3d4g+VKgTlJe+feYxKM71zV68dwQfBWNYp5/83FigfQafn7Rj2zWOLn8FL3FZKkRFSrjK/Tqrnn81nbjr4wnZMi/U7/ist37o1KFxfaIkmLEd1JSjkmdKk=';const _IH='003f24f9cb3a972cace8b2813313d5a31bd85ac566b19fc4cfd4159b9c16321c';let _src;

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
