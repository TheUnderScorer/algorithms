interface RomanCharDefinition {
  defaultValue: number;
  relations?: Record<
    string,
    {
      position: 'left' | 'right';
      value: number | null;
    }
  >;
}

const definitions: Record<string, RomanCharDefinition> = {
  I: {
    defaultValue: 1,
    relations: {
      V: {
        position: 'right',
        value: 4,
      },

      X: {
        position: 'right',
        value: 9,
      },
    },
  },

  V: {
    defaultValue: 5,
    relations: {
      I: {
        position: 'left',
        value: null,
      },
    },
  },

  X: {
    defaultValue: 10,

    relations: {
      I: {
        position: 'left',
        value: null,
      },

      L: {
        position: 'right',
        value: 40,
      },
      C: {
        position: 'right',
        value: 90,
      },
    },
  },

  L: {
    defaultValue: 50,

    relations: {
      X: {
        position: 'left',
        value: null,
      },
    },
  },

  C: {
    defaultValue: 100,
    relations: {
      D: {
        position: 'right',
        value: 400,
      },

      M: {
        position: 'right',
        value: 900,
      },

      X: {
        position: 'left',
        value: null,
      },
    },
  },

  D: {
    defaultValue: 500,
    relations: {
      C: {
        position: 'left',
        value: null,
      },
    },
  },

  M: {
    defaultValue: 1000,
    relations: {
      C: {
        position: 'left',
        value: null,
      },
    },
  },
};

export function romanToInteger(roman: string) {
  return roman.split('').reduce((acc, character, index) => {
    const definition = definitions[character];

    if (!definition) {
      return acc;
    }

    const leftRelation = definition.relations?.[roman[index - 1]];
    const rightRelation = definition.relations?.[roman[index + 1]];

    if (leftRelation?.position === 'left') {
      return leftRelation.value ? acc + leftRelation.value : acc;
    }

    if (rightRelation?.position === 'right') {
      return rightRelation.value ? rightRelation.value + acc : acc;
    }

    return definition.defaultValue + acc;
  }, 0);
}
