export const ADMIN = Symbol('ADMIN');
export const USER = Symbol('USER');

export const CREATE = Symbol('CREATE');
export const READ = Symbol('READ');
export const SAVE = Symbol('SAVE');

export const disks = ['A', 'B'];

export const user_config = {
  roles: {
    QWERTY123: ADMIN,
    USER456: USER,
  },

  permissions: {
    [ADMIN]: [CREATE, READ, SAVE],
    [USER]: [CREATE, READ, SAVE],
  },

  spaces: {
    [ADMIN]: 'B',
    [USER]: 'A',
  },
};
